import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({data}) {
  return (
    <div>
        {
            data.map((item) => (
                <Link key={item.id} to={`/detail/${item.id}`}><h2>{item.name}</h2></Link>
            ))
        }
    </div>
  )
}
