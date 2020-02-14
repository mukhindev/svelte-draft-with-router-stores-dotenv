const API = '__API__'

const get = async (router) => {
  console.log(`GET /${router}`)
  const url = `${API}/${router}`
  const method = 'GET'
  const headers = {
    'Content-Type': 'application/json'
  }
  const response = await fetch(url, { method, headers })
  const json = await response.json()
  return json
}

const post = async (router, data) => {
  console.log(`POST /${router}`, data)
  const url = `${API}/${router}`
  const method = 'POST'
  const headers = {
    'Content-Type': 'application/json'
  }
  const body = JSON.stringify(data)
  const response = await fetch(url, { method, headers, body })
  const json = await response.json()
  return json
}

export default {
  get,
  post
}
