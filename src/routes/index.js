import Home from '../pages/Home.svelte'
import Posts from '../pages/Posts.svelte'
import PostPage from '../pages/PostPage.svelte'

const routes = [
  {
    path: '/',
    page: Home
  },
  {
    path: '/posts',
    page: Posts
  },
  {
    path: '/posts/:id',
    page: PostPage
  }
]

export {
  routes
}
