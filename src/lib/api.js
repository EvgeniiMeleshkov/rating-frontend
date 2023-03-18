import setHeaders from '@/lib/setHeaders.js'

const 
  // Fetch from
  baseURL = '/api',
  makeURL = url => baseURL + url,
  // Some mime types
  contentJson = { 'content-type':'application/json' },
  contentText = { 'content-type': 'text/plain' }
;

// Functional-style api maker
const api = method => answer =>  
  headers => url => async body => {
    const res = await fetch(makeURL(url), {
      headers: setHeaders(localStorage, headers),
      method,
      body
    })

    if (res.ok) return res[answer]()
    else throw new Error(res.statusText)
}

const 
  post = api('POST'),
  postText = post('text'),
  postTextContentJson = postText(contentJson),
  register = postTextContentJson('/auth/register')
;

export default {
  register
}
