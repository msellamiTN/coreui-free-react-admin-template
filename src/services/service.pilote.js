import http from '../services/http-common'
class PiloteDataService {
  getAll() {
    return http.get('/pilote')
  }

  get(name) {
    return http.get(`/pilotes/?nom=${name}`)
  }

  create(data) {
    return http.post('/pilote', data)
  }

  update(id, data) {
    return http.put(`/pilotes/${id}`, data)
  }

  delete(id) {
    return http.delete(`/pilotes/${id}`)
  }

  deleteAll() {
    return http.delete(`/pilotes`)
  }

  findByTitle(title) {
    return http.get(`/pilotes?title=${title}`)
  }
}

export default new PiloteDataService()
