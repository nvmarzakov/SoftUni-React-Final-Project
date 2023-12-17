import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            <h1>Exercise Details</h1>
            <div className="info-section">
                <div className="exercise-header">
                    <img src={exercise.imageUrl} alt={exercise.title} />
                    <span className="category">Category: {exercise.category}</span>
                    <p className="muscle">Trapezius, Rhomboid</p>
                </div>
                <p className="summary">
                    {exercise.summary}
                </p>
                <p className="reps">
                    Reps: {exercise.reps}
                </p>
            </div>
        </section>
    );
};
