export default function ExerciseListItem({
    _id,
    title,
    category,
    imageUrl,
    summary
}) {
    return (
        <div className="exercise-list">
            <div id="exercise-item">
                <div className="info">
                    <h3 className="exercise-category">{category}</h3>
                    <img className="img" src={imageUrl} />
                    <h4 className="exercise-item-title">{title}</h4>
                    <a href="#" className="details-buttons">Details</a>
                </div>
            </div>
        </div>
    )
}
