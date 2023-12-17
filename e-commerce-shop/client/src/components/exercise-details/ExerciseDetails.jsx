import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as exerciseService from '../../services/exerciseService'

export default function ExerciseDetails() {
    const [exercise, setExercise] = useState({});
    const { exerciseId } = useParams();

    useEffect(() => {
        exerciseService.getOne(exerciseId)
            .then(result => setExercise(result));
    }, [exerciseId])

    return (
        <section id="exercise-details" className="animate__animated animate__fadeIn">
            <div className="info-section">
                <h1>Exercise Details</h1>
               
                <div className="details-container">
                    <div className="description">
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
            <div className="exercise-header">


                <Link to={'/exercises'} className="back-button">Back</Link>

            </div>
        </section>
    );
};
