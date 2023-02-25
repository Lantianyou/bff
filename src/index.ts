import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()
app.use('/', serveStatic({ path: './build/index.html' }))
app.use('*', serveStatic({ root: './build' }))


export default {
  port: 4321,
  fetch: app.fetch,
}
