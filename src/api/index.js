import fetch from 'isomorphic-fetch'

// const baseURL = 'https://ecommerce-api-a4661.herokuapp.com/api'
// const baseURL = 'https://api-rest-test.herokuapp.com/api'
const baseURL = 'http://localhost:3001/api'

const API = {
  products: {
    /*
    El codigo de abajo sustitulle esta function utilizando
    sintaxis de "async await":
    function getAll() {
      fetch(`${baseURL}/products`)
        .then(function (response)) {
          return response.json();
        })
        .then(function (data) {
          return data;
        })
    },
    Sintaxsis ECMASCRIPT2016:
    function getAll() {
      fetch(`${baseURL}/products`)
        .then(response => response.json())
        .then(data => data);
    },
    */
    async getAll () {
      const response = await fetch(`${baseURL}/products`)
      const data = await response.json()
      return data
    },

    async getSingle (id) {
      const response = await fetch(`${baseURL}/products/${id}`)
      const data = await response.json()
      return data
    },

    async save (item) {
      const response = await fetch(`${baseURL}/products`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }),
        body: JSON.stringify(item)
      })
      const data = await response.json()
      return data
    },

    async delete (id) {
      const response = await fetch(`${baseURL}/products/${id}`, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json'
        })
      })
      const data = await response.json()
      return data
    }
  }
}

export default API
