import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  createSuccessful,
  getTopicsSuccessful,
  getTargetsSuccessful,
  editTarget,
  deleteTarget,
} from "store/reducers/targetsSlice";
import useModal from "./useModal";
import TargetsService from "services/targetsService";
import routes from "constants/routes";

const useTargets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    [dispatch, navigate]
  );

  const handleCreate = useCallback(
    async ({ topic, ...rest }) => {
      try {
        setIsLoading(true);
        const {
          data: { target },
        } = await TargetsService.createTarget({
          ...rest,
          topic_id: topics.find(({ label }) => label === topic).id,
        });

        dispatch(createSuccessful(target));
        navigate(routes.home);
      } catch ({
        response: {
          data: {
            errors: { user, targets_limit },
          },
        },
      }) {
        setErrors(user || targets_limit);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, setErrors, navigate, topics]
  );

  const handleDelete = useCallback(
    async (id) => {
      try {
        await TargetsService.deleteTarget({ id });

        dispatch(deleteTarget(id));
        closeModal();
        navigate(routes.home);
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, closeModal, navigate]
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
  }, [getTargets, getTopics]);

  return {
    handleCreate,
    startEditingTarget,
    handleDelete,
    handleEditTarget,
    editingTargetId,
    topics,
    targets,
    errors,
    isLoading,
  };
};

export default useTargets;
