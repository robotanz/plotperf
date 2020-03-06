import React, { useEffect } from 'react'
import * as d3 from 'd3'

function CanvasPlot(props) {
  const { count = 10000 } = props

  useEffect(() => {
    const svg = d3.select('svg')
    const width = +svg.attr('width')
    const height = +svg.attr('height')

    const randomX = d3.randomNormal(width / 2, 80)
    const randomY = d3.randomNormal(height / 2, 80)
    const data = d3.range(count).map(() => {
      return [randomX(), randomY()]
    })

    svg.selectAll('circle').remove()

    const circle = svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', 2.5)
      .attr('fill', 'lavender')
      .attr('transform', transform(d3.zoomIdentity))

    svg
      .append('rect')
      .attr('fill', 'none')
      .attr('pointer-events', 'all')
      .attr('width', width)
      .attr('height', height)
      .call(
        d3
          .zoom()
          .scaleExtent([1, 8])
          .on('zoom', zoom)
      )

    function zoom() {
      circle.attr('transform', transform(d3.event.transform))
    }

    function transform(t) {
      return d => 'translate(' + t.apply(d) + ')'
    }
  }, [count])

  return <svg width="1000" height="800" />
}

export default CanvasPlot
