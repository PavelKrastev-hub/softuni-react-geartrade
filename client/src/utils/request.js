export const request = async (method, url, data) => {
    let options = {};

    if (method !== "GET") {
        options = {
            method,
        };
    }

    if (data) {
        options = {
            ...options,
            headers: {
                'content-type': 'applicateion/json',
            },
            body: JSON.stringify(data),
        }
    }

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
};

export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'GET'),
    put: request.bind(null, 'GET'),
    delete: request.bind(null, 'GET'),
};
