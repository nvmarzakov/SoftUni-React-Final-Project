export const request = async (method, url, data) => {
    const response = await fetch(url, {
        method,
    });

    if(!response.ok) {
        throw new Error('Error response')
    }   

    const result = await response.json()

    return result;
}