// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimeLineCard = props => {
  const {ProjectList} = props
  const {
    categoryId,
    id,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = ProjectList
  console.log(imageUrl)
  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="img-tumbline" />
      <div className="title-container-project">
        <h1 className="title-project">{projectTitle}</h1>
        <div className="icon-container-project">
          <AiFillCalendar className="icon-project" />
          <p className="time-text-project">{duration}</p>
        </div>
      </div>
      <p className="discription-project">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
