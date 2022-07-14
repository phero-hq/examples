import { SamenClient } from "@samen/client"

const fetch = window.fetch.bind(window)
const client = new SamenClient(fetch, process.env.REACT_APP_SAMEN_URL)

const w = window as any
w.client = client
