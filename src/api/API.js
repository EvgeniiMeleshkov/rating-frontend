import setHeaders from '../utils/setHeaders.js'

const baseURL = '/api'
const makeURL = url => baseURL + url
const contentJson = {'content-type':'application/json'}
const contentText = {'content-type': 'text/plane'}

const api = method => answer => headers => url => async body => {
  const res = await fetch(makeURL(url), {
    method,
    body,
    headers: setHeaders(headers)
  })
  return res[answer]()
} 

const post = api('POST')
const postText = post('text')
const postTextContentJson = postText(contentJson)
const register = postTextContentJson('/auth/register')

export {
  register
}

