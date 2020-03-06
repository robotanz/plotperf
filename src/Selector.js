import React from 'react'

export function Selector(props) {
  const { text, onClick, selected } = props

  if (selected) {
    return <b>{text}</b>
  } else {
    return <span className="App-link" onClick={onClick}> {text} </span>
  }
}
