import "./style.css"
import { CountTooHighError, PheroClient } from "./phero.generated"

const fetch = window.fetch.bind(this)
const phero = new PheroClient(fetch)

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="card">
    <button id="counter" type="button">Click me</button>
    <div>
      <input type="checkbox" id="checkbox" checked />
      <label for="checkbox">Use valid data</label>
    </div>
  </div>
`

const button = document.querySelector<HTMLButtonElement>("#counter")!
const checkbox = document.querySelector<HTMLInputElement>("#checkbox")!

function setupCounter() {
  let current = 0
  const setCounter = async () => {
    try {
      button.disabled = true
      current = await phero.countService.count(
        checkbox.checked ? current : (`${current}` as any),
      )
      button.innerHTML = `count is ${current}`
    } catch (error) {
      if (error instanceof CountTooHighError) {
        alert(`You can't go higher then ${error.maxCount}, sorry about that`)
      } else {
        alert("Something went wrong")
      }
    } finally {
      button.disabled = false
    }
  }
  button.addEventListener("click", setCounter)
}

setupCounter()
