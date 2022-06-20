import { SamenClient } from "@samen/client"

const fetch = window.fetch.bind(window)
const client = new SamenClient(fetch, process.env.REACT_APP_SAMEN_URL)

async function run() {
  console.log(await client.articleService.get("1"))
}

export default run()
