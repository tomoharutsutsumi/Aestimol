import axios from 'axios';
import camelCase from 'lodash.camelcase';
import snakeCase from 'lodash.snakecase';
import deepMapKeys from '../utils/deepMapKeys';

const baseUrl = 'http://localhost:7000'

export default axios.create({
  baseURL: baseUrl,

  transformResponse: [
    ...axios.defaults.transformRequest, 
    function(data, headers) {
      const newData = data.length === 0 ? data : JSON.parse(data)
      if (
        !headers['Content-Type'] ||
        !headers['Content-Type'].includes('application/json')
      ) {
        return newData
      }
      return deepMapKeys(newData, (_val, key) => {
        return camelCase(key)
      })
    }
  ],

  transformRequest: [
    function(data) {
      if (data instanceof FormData) {
        return data
      }
      return deepMapKeys(data, (_val, key) => {
        return snakeCase(key)
      })
    },
    ...axios.defaults.transformRequest
  ],
})
