import React, { useState } from 'react'
import './App.css'
import CanvasPlot from './CanvasPlot'
import SvgPlot from './SvgPlot'
import { Selector } from './Selector'

function App() {
  const [count, setCount] = useState(2000)
  const [mode, setMode] = useState('canvas')

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            Enter the number of points: <input type="text" value={count} onChange={e => setCount(Number.parseInt(e.target.value, 10))} />
          </div>
          <div>
            <Selector text="Canvas" onClick={() => setMode('canvas')} selected={mode === 'canvas'} />
            <Selector text="SVG" onClick={() => setMode('svg')} selected={mode === 'svg'} />
          </div>
        </div>
        { mode === 'canvas' ? <CanvasPlot count={count} /> : <SvgPlot count={count} /> }
      </header>
    </div>
  )
}

export default App
