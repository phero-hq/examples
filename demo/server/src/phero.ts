import { createService } from "@phero/server"

interface Doc {
  id: string
  author?: User
  content: Component[]
}

interface User {
  id: string
  name: string
  email?: string
}

interface TextComponent {
  type: "text"
  content: string
}

interface ImageComponent {
  type: "image"
  src: string
}

type Component = TextComponent | ImageComponent

async function getDoc(id: string): Promise<Doc> {
  return { id, content: [] }
}

export const docService = createService({ getDoc })
