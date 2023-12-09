const baseUrl = 'http://localhost:3030/jsonstore'

export const create = async (exerciseData) => {
    const response = await fetch(`${baseUrl}/games`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(exerciseData)
    });

    const result = await response.json();
    return result;
}