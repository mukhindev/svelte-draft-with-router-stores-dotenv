import App from './App.svelte'
import page from 'page'
import { routes } from './routes'

const app = new App({
  target: document.body
})

for (const route in routes) {
  page(routes[route].path, ctx => {
    app.$set({ ctx, page: routes[route].page })
  })
}

page.start()

export default app
