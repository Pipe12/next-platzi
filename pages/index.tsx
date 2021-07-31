import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [avoList, setAllAvos] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setAllAvos(data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Nextjs!</div>
      {avoList.map((avo) => (
        <div>{avo.id}</div>
      ))}
    </div>
  )
}

export default HomePage
