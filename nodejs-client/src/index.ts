import fetch from "node-fetch"
import { SamenClient } from "@samen/client"

console.log(fetch)
const client = new SamenClient(fetch, "http://localhost:3030")

async function run() {
  const article = await client.articleService.get("1", true)
  console.log("GOT article", article)

  console.log("kaas 20%", await client.kaasService.getKaas(20))
  console.log("kaas 40%", await client.kaasService.getKaas(40))
}

run()
