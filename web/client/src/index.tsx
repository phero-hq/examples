import { SamenClient } from "@samen/client"

const client = new SamenClient(window.fetch, process.env.REACT_APP_SAMEN_URL)

async function run() {
  const x = await client.articleService.get("1", false)
  const y = await client.articleService4.get("1", true)
  const z = await client.xarticleService4.get("1", true)
  const sjaak = await client.xysjaakService3.get("sjaak")
  client.xysjaakService3.aad()
  const xxx = await client.xxsjaakService4.update()
}

export default run()
