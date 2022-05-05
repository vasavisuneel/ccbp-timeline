import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-list-item">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="project-title-duration-container">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="calender" />
          <p className="duration">{duration}</p>
        </div>
      </div>

      <p className="project-description">{description}</p>
      <a href={projectUrl} className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
