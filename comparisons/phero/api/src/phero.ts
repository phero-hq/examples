import { createService } from "@phero/server"

class CountTooHighError extends Error {
  constructor(public readonly maxCount: number) {
    super()
  }
}

const maxCount = 3

async function count(current: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 200))
  if (current >= maxCount) {
    throw new CountTooHighError(maxCount)
  }
  return current + 1
}

export const countService = createService({
  count,
})
