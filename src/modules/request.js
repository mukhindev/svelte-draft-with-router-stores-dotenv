const API = '__API__'

const get = async (router) => {
  console.log(`GET /${router}`)
  const url = `${API}/${router}`
  const method = 'GET'
  // const token = localStorage.getItem('token') // если с авторизацией
  const headers = {
    'Content-Type': 'application/json'
    // Authorization: token // если с авторизацией
  }
  const response = await fetch(url, { method, headers })
  const json = await response.json()
  return json
}

const post = async (router, data) => {
  console.log(`POST /${router}`, data)
  const url = `${API}/${router}`
  const method = 'POST'
  // const token = localStorage.getItem('token') // если с авторизацией
  const headers = {
    'Content-Type': 'application/json'
    // Authorization: token // если с авторизацией
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
