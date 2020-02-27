let series = {
  type: 'gauge',
  startAngle: -Math.PI / 2,
  endAngle: Math.PI * 1.5,
  arcLineWidth: 8,
  axisLabel: {
    show: false
  },
  axisTick: {
    show: false
  },
  pointer: {
    show: false
  },
  dataItemStyle: {
    lineCap: 'round'
  },
  details: {
    show: true,
    formatter: '{value}',
    style: {
      fill: '#1ed3e5',
      fontSize: 16
    },
    offset: [0, 12]
  }
}
let gradient = ['#03c2fd', '#1ed3e5', '#2fded6']
let title = {
  offset: [0, 21],
  style: {
    fill: '#fff'
    // fill: '#1ed3e5'
  }
}

export function getOption1 () {
  return {
    title: {
      ...title,
      text: '车流'
    },
    series: [
      {
        ...series,
        data: [
          { name: '人流', value: 0, gradient }
        ]
      }
    ]
  }
}
export function getOption2 () {
  return {
    title: {
      ...title,
      text: '人流'
    },
    series: [
      {
        ...series,
        data: [
          { name: '人流', value: 0, gradient }
        ]
      }
    ]
  }
}