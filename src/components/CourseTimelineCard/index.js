// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const ListOfItems = props => {
  const {courseDetails} = props
  const {id, name} = courseDetails
  return (
    <li className="list">
      <p className="list-text">{name}</p>
    </li>
  )
}

const CourseTimeLineCard = props => {
  const {courseList} = props
  const {
    categoryId,
    id,
    courseTitle,
    title,
    description,
    duration,
    tagsList,
  } = courseList

  return (
    <div className="course-container">
      <div className="title-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle className="icon" />
          <p className="time-text">{duration}</p>
        </div>
      </div>
      <p className="discription">{description}</p>
      <ul className="un-order-list">
        {tagsList.map(echValue => (
          <ListOfItems courseDetails={echValue} key={echValue.id} />
        ))}
      </ul>
    </div>
  )
}

export default CourseTimeLineCard
