import Home from '../pages/Home.svelte'
import Posts from '../pages/Posts.svelte'

const routes = [
  {
    path: '/',
    page: Home
  },
  {
    path: '/posts',
    page: Posts
  }
]

export {
  routes
}
