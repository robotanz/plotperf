import React, { useEffect } from 'react'
import * as d3 from 'd3'

function CanvasPlot(props) {

  const { count = 10000 } = props

  useEffect(() => {
    const canvas = d3.select('canvas').call(
      d3
        .zoom()
        .scaleExtent([1, 20])
        .on('zoom', zoom)
    )
    const context = canvas.node().getContext('2d')
    const width = canvas.property('width')
    const height = canvas.property('height')

    const randomX = d3.randomNormal(width / 2, 80)
    const randomY = d3.randomNormal(height / 2, 80)
    const data = d3.range(count).map(() => {
      return [randomX(), randomY()]
    })

    context.clearRect(0, 0, width, height)
    draw(d3.zoomIdentity)

    function zoom() {
      context.clearRect(0, 0, width, height)
      draw(d3.event.transform)
    }

    function draw(transform) {
      var i = -1,
        n = data.length,
        d
      context.beginPath()
      while (++i < n) {
        d = transform.apply(data[i])
        context.moveTo(d[0], d[1])
        context.arc(d[0], d[1], 2.5, 0, 2 * Math.PI)
      }
      context.fillStyle = 'lightcyan'
      context.fill()
    }
  }, [count])

  return <canvas width="1000" height="800" />
}

export default CanvasPlot
