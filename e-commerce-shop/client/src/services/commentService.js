import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';


export const getAll = async (exerciseId) => {
    const result = await request.get(baseUrl);

    return Object.values(result).filter(comment => comment.exerciseId === exerciseId); //to fix 
};

export const create = async (exerciseId, username, text) => {
    const newComment = await request.post(baseUrl, {
        exerciseId,
        username,
        text
    });

    return newComment;
}