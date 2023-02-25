import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()
app.use('/', serveStatic({ path: './static/index.html' }))
app.use('*', serveStatic({ root: './static' }))


export default {
  port: 4321,
  fetch: app.fetch,
}
