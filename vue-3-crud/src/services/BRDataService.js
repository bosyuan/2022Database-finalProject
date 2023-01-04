import http from "../http-common";

class BRDataService {
  getAll() {
    return http.get("/br_videotrending");
  }

  get(id) {
    return http.get(`/br_videotrending/${id}`);
  }

  getTopView() {
    return http.get("/br_videotrending/trending");
  }
  
  create(data) {
    return http.post("/br_videotrending", data);
  }

  update(id, data) {
    return http.put(`/br_videotrending/${id}`, data);
  }

  delete(id) {
    return http.delete(`/br_videotrending/${id}`);
  }

  deleteAll() {
    return http.delete(`/br_videotrending`);
  }

}

export default new BRDataService();