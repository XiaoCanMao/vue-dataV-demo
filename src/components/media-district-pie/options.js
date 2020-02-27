let color = ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b']
let title = {
  text: '媒体分布',
  style: {
    fill: '#fff',
    fontSize: 12
  },
  offset: [0, 110]
}
let series = {
  type: 'pie',
  data: [],
  radius: ['30%', '40%'],
  center: ['50%', '40%'],
  insideLabel: {
    show: false
  },
  outsideLabel: {
    labelLineEndLength: 5,
    formatter: '{percent}%\n{name}',
    style: {
      fontSize: 8,
      fill: '#fff'
    }
  }
}
export function getOption1 () {
  return {
    title: {
      ...title,
      text: '在刊媒体分布'
    },
    series: [
      {
        ...series,
        data: [
          { name: '', value: 25 },
          { name: '', value: 25 },
          { name: '', value: 25 },
          { name: '', value: 25 }
        ]
      }
    ],
    color
  }
}

export function getOption2 () {
  return {
    title: {
      ...title,
      text: '在刊媒体分布'
    },
    series: [
      {
        ...series,
        data: [
          { name: '', value: 25 },
          { name: '', value: 25 },
          { name: '', value: 25 },
          { name: '', value: 25 }
        ]
      }
    ],
    color
  }
}
