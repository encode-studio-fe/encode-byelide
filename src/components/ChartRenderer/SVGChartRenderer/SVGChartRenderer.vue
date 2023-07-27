<template>
  <div class="svg" ref="containerRef"></div>
</template>

<script setup lang="ts">
import * as d3 from 'd3'
import { onMounted, ref } from 'vue'

const containerRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const width = containerRef.value?.clientWidth || 1024
  const height = containerRef.value?.clientHeight || 768

  const svg = d3
    .select(containerRef.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(0,0)')

  const projection = d3
    .geoMercator()
    .center([107, 38])
    .scale(500)
    .translate([width / 2, height / 2])

  const path = d3.geoPath(projection)

  d3.json<d3.ExtendedFeatureCollection>(
    'https://gist.githubusercontent.com/zhulinpinyu/8e18d57b3b18fb74e776/raw/efbb74cfea53decb1fe7d6bf279fd351c28c4810/china_simplify.json'
  ).then((root: any) => {
    const featuresLen = root.features.length

    const colors = d3.scaleLinear(
      [0, featuresLen * 0.33, featuresLen * 0.66, featuresLen],
      ['#B58929', '#C61C6F', '#268BD2', '#85992C']
    )
    // .domain([0, featuresLen * 0.33, featuresLen * 0.66, featuresLen])
    // .range(['#B58929', '#C61C6F', '#268BD2', '#85992C'])

    //添加提示
    const tooltip = d3.select('body').append('div').attr('class', 'tooltip').style('opacity', 0)

    //绘制地图
    svg
      .selectAll('path')
      // 这是核心！
      .data(root.features)
      .enter()
      .append('path')
      .attr('stroke', '#000')
      .attr('stroke-width', 1)
      .style('opacity', 0.8)
      .attr('fill', function (d, i: number) {
        return colors(i)
      })
      // @ts-ignore
      .attr('d', path)
      .on('mouseover', function (ev, d) {
        const hoveredData = d as d3.ExtendedFeature
        if (!hoveredData) return

        d3.select(this).style('opacity', 1)

        tooltip.transition().duration(200).style('opacity', 0.9)

        tooltip
          .html(hoveredData.properties?.name)
          .style('left', ev.pageX + 'px')
          .style('top', ev.pageY - 28 + 'px')
      })
      .on('mouseout', function () {
        d3.select(this).style('opacity', 0.8)
        tooltip.transition().duration(500).style('opacity', 0)
      })
  })
})
</script>

<style scoped>
.svg {
  width: 100%;
  height: 560px;
}
</style>

<style lang="css">
.tooltip {
  position: absolute;
  z-index: 9999;
  padding: 0;
  color: const(--color-primary);
  font-size: 13px;
  text-align: left;
  border-radius: 2px;
  pointer-events: none;
}
</style>
