import http from './http-common'
class ProjectDataService {
  getAll() {
    return http.get('/projects')
  }

  get(id) {
    return http.get(`/projects/?reference=${id}`)
  }

  create(project) {
    let data = new FormData()
    return http.post('/projects/', (data = project))
  }

  update(id, data) {
    return http.put(`/projects/${id}`, data)
  }

  delete(id) {
    return http.delete(`/projects/${id}`)
  }

  deleteAll() {
    return http.delete(`/projects`)
  }

  findByDateCreation(datacreation) {
    return http.get(`/projets?datacreation=${datacreation}`)
  }
}

export default new ProjectDataService()
