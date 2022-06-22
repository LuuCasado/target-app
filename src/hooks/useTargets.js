import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import TargetsService from "services/targetsService";
import {
  createSuccessful,
  getTopicsSuccessful,
  getTargetsSuccessful,
} from "store/reducers/targetsSlice";

const useTargets = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const topics = useSelector((state) => state.targets.topics);
  const targets = useSelector((state) => state.targets.targets);

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
  }, []);

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

  useEffect(() => {
    getTopics();

    getTargets();
  }, []);

  return { handleCreate, topics, targets, errors };
};

export default useTargets;
