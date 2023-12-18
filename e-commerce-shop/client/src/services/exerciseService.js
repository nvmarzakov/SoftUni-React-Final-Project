import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/exercises'

//Get all exercises
export const getAll = async () => {
    const result = await request.get(baseUrl);

    

    return Object.values(result) // премахвам id-тата
};

export const getOne = async (exerciseId) => {
    const result = await request.get(`${baseUrl}/${exerciseId}`);
    // console.log(result)
    return result;
}

// create-exercise
export const create = async (exerciseData) => {
    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(exerciseData)
    });

    const result = await response.json();
    console.log(result)
    return result;
}