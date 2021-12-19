const httpRequest = async (endpoint, method, body) => {
    const res = await fetch(endpoint, {
        method, 
        // V to samo co
        // method: method,

        headers: {
            'Content-Type': 'application/json',
        },
        // body: body ? body : null,
        body: body ? JSON.stringify(body) : null,
    });

    return res.json();
};

export default httpRequest();

const httpMiddleware = async (...params) => {
    try{
        return httpRequest(...params);
    } catch (err) {
        console.log(err);
    }
}


export const http = {
    get: (endpoint) => httpMiddleware(endpoint, 'GET'),
    post: (endpoint, body) => httpMiddleware(endpoint, 'POST', body),
    put: (endpoint, body) => httpMiddleware(endpoint, 'PUT', body),
    delete: (endpoint, body) => httpMiddleware(endpoint, 'DELETE', body),
}