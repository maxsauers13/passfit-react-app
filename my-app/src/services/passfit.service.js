import http from "../http-common";

class PassfitDataService {
  getAll() {
    return http.get("/passfits");
  }

  get(id) {
    return http.get(`/passfits/${id}`);
  }

  create(data) {
    //window.alert("post");
    return http.post("/passfits", data);
  }

  update(id, data) {
    return http.put(`/passfits/${id}`, data);
  }

  delete(id) {
    return http.delete(`/passfits/${id}`);
  }

  deleteAll() {
    return http.delete(`/passfits`);
  }

  findByTitle(title) {
    return http.get(`/passfits?title=${title}`);
  }
}

export default new PassfitDataService();