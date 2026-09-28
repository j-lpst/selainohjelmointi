import { createServer } from 'vite'
const server = await createServer({ server: { middlewareMode: true }, logLevel: 'silent' })
const { default: App } = await server.ssrLoadModule('/src/App.jsx')
const { renderToString } = await import('react-dom/server')
const { createElement } = await import('react')
const html = renderToString(createElement(App))
console.log(html)
await server.close()
