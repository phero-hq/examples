import { createService } from '@phero/server'

async function helloWorld(name: string): Promise<string> {
  return `Hi there, ${name}!`
}

export const helloWorldService = createService({
  helloWorld,
})
