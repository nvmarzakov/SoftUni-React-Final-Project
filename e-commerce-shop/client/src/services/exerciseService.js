import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/exercises'

//Get all exercises
export const getAll = async () => {
    const result = await request('GET', baseUrl);

    console.log(result);

    //return from data object values 
    return Object.values(result)
}

// create-exercise
export const create = async (exerciseData) => {
    const response = await fetch(`${baseUrl}/exercises`, {
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