
import { PheroClient } from "./phero.generated"

const fetch = window.fetch.bind(window)
const phero = new PheroClient(fetch, process.env.REACT_APP_SAMEN_URL)

export default function App() {
  const [doc, setDoc] = useState<Doc>()
  const [error, setError] = useState<unknown>()

  const loadData = useCallback(async ()=>{
    const newDoc = await phero.docService.getDoc('idkfa')
    console.log({newDoc})
    setDoc(newDoc)
  },[])
  
  useEffect(()=>{
    loadData().catch(setError)
  },[])

  if (!doc) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Something went wrong!</p>
  }
  
  return (
    <div>
      <p>Written by: {doc.author?.name ?? "Nobody"}</p>
      {doc.content.map(item => {
        switch (item.type) {
          case "image": return <img src={item.src} />
          case "text": return <p>{item.content}</p>
        }
      })}
    </div>
  )
}
