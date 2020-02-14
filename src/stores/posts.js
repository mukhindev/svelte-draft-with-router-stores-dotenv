import { writable } from 'svelte/store'
import request from '../modules/request'

const posts = writable([])

const getPosts = async () => {
  const json = await request.get('posts')
  posts.set(json)
}

export {
  posts,
  getPosts
}
