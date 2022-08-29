import { SamenClient } from "./samen.generated"

const fetch = window.fetch.bind(window)
const client = new SamenClient(fetch, process.env.REACT_APP_SAMEN_URL, {
  context: {
    articleService: () => ({ idToken: "Bearer 12345-Karel" }),
  },
})

const w = window as any
w.client = client
