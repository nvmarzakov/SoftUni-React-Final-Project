import { useEffect, useState } from "react"

import * as exerciseService from '../../services/exerciseService';


export default function ExerciseList() {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        exerciseService.getAll()
            .then(result => setExercises(result))
    },[]);

    console.log(exercises)
    
    return (
        <section id="all-exercises-page">
            <h1>All Exercises</h1>
            <div className="all-exercises">
                <div className="info">
                    <img src="./" alt="" />
                </div>
            </div>
        </section>
    )
}