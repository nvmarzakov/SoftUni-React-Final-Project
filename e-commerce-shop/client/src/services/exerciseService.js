import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/exercises'

//Get all exercises
export const getAll = async () => {
    const result = await request('GET', baseUrl);

    

    return Object.values(result) // премахвам id-тата
}

// create-exercise
export const create = async (exerciseData) => {
    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(exerciseData)
    });

    const result = await response.json();
    console.log(result)
    return result;
}