import Vue from 'vue'
export default {

  upload (data) {
    return new Promise((resolve, reject) => {
      Vue.axios.post('/image', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(response => {
        resolve(response.data)
      })
    })
  }
}
