import { Link } from 'react-router-dom'

export default function ExerciseListItem({
    _id,
    title,
    category,
    imageUrl,
    summary,
    reps,
}) {
    return (
        <div className="exercise-list">
            <div id="exercise-item">
                <div className="info">
                    <h3 className="exercise-category">{category}</h3>
                    <img className="img" src={imageUrl} />
                    <h4 className="exercise-item-title">{title}</h4>
                    <Link to={`/exercises/${_id}`} className="details-buttons">Details</Link>
                </div>
            </div>
        </div>
    )
}
