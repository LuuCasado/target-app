import axios from "axios";

import { base, endpoints } from "constants/api";

class TargetsService {
  static createTarget({
    title,
    topic_id,
    radius,
    mapLongitude: lng,
    mapLatitude: lat,
  }) {
    const data = {
      target: {
        title,
        topic_id,
        radius,
        lng,
        lat,
      },
    };

    return axios.post(`${base}${endpoints.createTarget}`, data);
  }

  static getTopics() {
    return axios.get(`${base}${endpoints.getTopics}`, {
      data: {},
    });
  }

  static getTargets() {
    return axios.get(`${base}${endpoints.getTargets}`, {
      data: {},
    });
  }

  static deleteTarget({ id }) {
    return axios.delete(`${base}${endpoints.deleteTarget}/${id}`, {
      data: {},
    });
  }
}

export default TargetsService;
