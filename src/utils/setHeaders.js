import {auth} from '../data/auth.js'

export default function setHeaders (headers) {
  if(localStorage.auth) {
    return {
      ...headers,
      'authorization': `Bearer ${auth.get}`,
    }
  } else {
    return headers
  }
}


