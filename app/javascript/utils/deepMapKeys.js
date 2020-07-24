import isObject from 'lodash.isobject';

const deepMapKeys = (obj, cb) => {
  if (!isObject(obj) || obj instanceof File) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(val => {
      return deepMapKeys(val, cb)
    })
  }

  const entries = Object.entries(obj)
  const newEntries = entries.map(([key, value]) => [
    cb(value, key),
    deepMapKeys(value, cb)
  ])

  return Object.fromEntries(newEntries)
}

export default deepMapKeys