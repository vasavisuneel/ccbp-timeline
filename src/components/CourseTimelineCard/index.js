import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList, duration} = courseDetails

  return (
    <div className="course-list-item">
      <h1 className="course-heading">{courseTitle}</h1>
      <div className="duration-container">
        <AiFillClockCircle />
        <p className="duration">{duration}</p>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-tag-list">
        {tagsList.map(each => (
          <li key={each.id} className="course-item">
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
