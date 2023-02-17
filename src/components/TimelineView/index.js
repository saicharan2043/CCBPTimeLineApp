// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList.map(echValue => ({title: echValue.title}))

  const sendDataOtherComponent = echValue => {
    if (echValue.categoryId === 'COURSE') {
      return <CourseTimeLineCard courseList={echValue} key={echValue.id} />
    }
    return <ProjectTimeLineCard ProjectList={echValue} key={echValue.id} />
  }

  return (
    <div className="bg-color">
      <h1 className="my-journey-heading">MY JOURNEY OF CCBP 4.0</h1>
      <h1 className="ccbp-heading">CCBP 4.0</h1>
      <div className="time-line-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={items}
          theme={{
            primary: '#0967d2',
            secondary: 'white',
            titleColor: '#0967d2',
          }}
        >
          {timelineItemsList.map(echValue => sendDataOtherComponent(echValue))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
