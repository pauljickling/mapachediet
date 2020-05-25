import React from "react"
/* import { Link } from "gatsby" */
import "../index.css"

export default () => {
  const width = typeof window !== `undefined` ? window.innerWidth : 0;

  return (
    <main>
      <div className="container">
        <h1 className="titleFade1">Coming soon...</h1>
        <h2 className="titleFade2">The Mapache Diet</h2>
        {console.log(width)}
      </div>
    </main>
  )
}
