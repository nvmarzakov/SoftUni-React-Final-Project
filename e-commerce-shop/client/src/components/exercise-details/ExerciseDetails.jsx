import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as exerciseService from '../../services/exerciseService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";

export default function ExerciseDetails() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext)

    const [exercise, setExercise] = useState({});
    const [comments, setComments] = useState([])
    const { exerciseId } = useParams();

    useEffect(() => {
        exerciseService.getOne(exerciseId)
            .then(result => setExercise(result));
        
        commentService.getAll(exerciseId)
            .then(setComments)
    }, [exerciseId])

    //Comments Handler
    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            exerciseId,
            formData.get('username'),
            formData.get('comment')
        );
        setComments(state => [...state, newComment])
        console.log(newComment)
    }

    return (
        <div className="details-all animate__animated animate__fadeIn">
            <section id="exercise-details">
                <div className="info-section">
                    <h2 className="details-title">Exercise Details</h2>

                    <div className="details-container">
                        <div className="details-description">
                            <p className="category">Category: {exercise.category}</p>
                            <p className="muscle">Muscle: {exercise.muscle}</p>
                            <p className="reps">Reps: {exercise.repetitions}</p>
                            <p className="summary">Description: {exercise.description}</p>
                        </div>
                        <div className="img-container">
                            <img className="img-details" src={exercise.imageUrl} alt={exercise.title} />

                        </div>

                    </div>
                </div>
                <div className="exercise-button">
                    <Link to={'/exercises'} className="back-button">Back</Link>
                </div>
            </section>
            {isAuthenticated && (

                <section className="comments">
                    <article className="create-comment">
                        <h2 >Add New Comment</h2>
                        <form className="form" onSubmit={addCommentHandler}>
                            {/* test username */}
                            <input type="text" name="username" placeholder="enter username..." />
                            <textarea name="comment" placeholder="comment here..."></textarea>
                            <input className="btn-submit" type="submit" value="Add Comment" />
                        </form>
                    </article>
                    <article className="comments com">
                        <h3>Comments:</h3>
                        <ul>
                            {comments.map(({_id, username, text}) => (
                                <li key={_id} className="comment">
                                <p>user: {username} - {text}</p>
                            </li>
                            ))}
                            
                        </ul>
                        {comments.length === 0 && (
                            <p className="article no-comments">No comments.</p>
                        )}
                        
                    </article>
                </section>
            )}
        </div>
    );
};
