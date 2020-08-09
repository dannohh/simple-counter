import React, {setState, useEffect, useState} from 'react'
import {ClickCount} from './ClickCount'


export const Button = () => {

  const [clicks, setClicks] = useState(0)

  const handleClick = (event) => {
    setClicks(clicks + 5)

  }

  return (
    <div className="">
      <ClickCount clicks={clicks} />
    <button className="button is-large is-rounded mt-6 " onClick={handleClick}> My Sweet Button!</button>
    </div>
  )
}
