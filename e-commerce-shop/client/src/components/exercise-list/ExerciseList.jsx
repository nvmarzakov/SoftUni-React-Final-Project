import { useEffect, useState } from "react"

import * as exerciseService from '../../services/exerciseService';
import ExerciseListItem from "./exercise-list-item/ExerciseListItem";


export default function ExerciseList() {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        exerciseService.getAll()
            .then(result => setExercises(result))
            .catch((err => {
                console.log(err)
            }))
    },[]);
    
    return (
        <section id="all-exercises-page" className="animate__animated animate__fadeIn">
            <h2 className="all-exercises-page-title">All Exercises</h2>
            <section className="exercise-list">
            {exercises.map(exercise => (
                <ExerciseListItem key={exercise._id} {...exercise} />
            ))}
            </section>
        </section>
    )
}