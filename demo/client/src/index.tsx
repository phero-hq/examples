import React, { useCallback, useEffect, useState } from 'react'

export default function App() {
  const [doc, setDoc] = useState()
  const [error, setError] = useState<unknown>()

  const loadData = useCallback(async ()=>{
    // TODO
  },[])
  
  useEffect(()=>{
    loadData().catch(setError)
  },[])

  if (error) {
    return <p>Something went wrong!</p>
  }

  if (!doc) {
    return <p>Loading...</p>
  }
  
  return (
    <div>
    </div>
  )
}
