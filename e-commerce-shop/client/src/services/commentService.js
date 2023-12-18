import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const create = async (exerciseId, username, text) => {
    const newComment = await request.post(baseUrl, {
        exerciseId,
        username,
        text
    });

    return newComment;
}