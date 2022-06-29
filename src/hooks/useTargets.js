import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import TargetsService from "services/targetsService";
import routes from "constants/routes";
import {
  createSuccessful,
  getTopicsSuccessful,
  getTargetsSuccessful,
  editTarget,
  deleteTarget,
} from "store/reducers/targetsSlice";

const useTargets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const topics = useSelector((state) => state.targets.topics);
  const targets = useSelector((state) => state.targets.targets);
  const editingTargetId = useSelector((state) => state.targets.editingTargetId);

  const getTopics = useCallback(async () => {
    try {
      const {
        data: { topics },
      } = await TargetsService.getTopics();

      dispatch(getTopicsSuccessful(topics.map(({ topic }) => topic)));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const getTargets = useCallback(async () => {
    try {
      const {
        data: { targets },
      } = await TargetsService.getTargets();

      dispatch(getTargetsSuccessful(targets.map(({ target }) => target)));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const startEditingTarget = useCallback(
    (id) => {
      dispatch(editTarget(id));
      navigate(routes.editTarget);
    },
    [dispatch]
  );

  const handleCreate = useCallback(
    async ({ topic, ...rest }) => {
      try {
        const {
          data: { target },
        } = await TargetsService.createTarget({
          ...rest,
          topic_id: topics.find(({ label }) => label === topic).id,
        });

        dispatch(createSuccessful(target));
      } catch ({
        response: {
          data: {
            errors: { user, targets_limit },
          },
        },
      }) {
        setErrors(user || targets_limit);
      }
    },
    [dispatch, setErrors, topics]
  );

  const handleDelete = useCallback(
    async (id) => {
      try {
        await TargetsService.deleteTarget({ id });

        dispatch(deleteTarget(id));
        navigate(routes.home);
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  const handleEditTarget = useCallback(
    async ({ lng: mapLongitude, lat: mapLatitude, id, ...rest }) => {
      await handleDelete(id);
      await handleCreate({ mapLongitude, mapLatitude, ...rest });
    },
    [handleCreate, handleDelete]
  );

  useEffect(() => {
    getTopics();

    getTargets();
  }, []);

  return {
    handleCreate,
    startEditingTarget,
    handleDelete,
    handleEditTarget,
    editingTargetId,
    topics,
    targets,
    errors,
  };
};

export default useTargets;
