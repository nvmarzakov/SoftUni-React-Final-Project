export const request = async (method, url, data) => {
    const response = await fetch(url, {
        method,
        body: JSON.stringify(data), // Предаване на данните като JSON
        headers: {
            'Content-Type': 'application/json', //Content-Type за JSON данни
        },
    });

    const result = await response.json();
    return result;
};
