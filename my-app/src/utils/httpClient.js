const httpRequest = async (endpoint, method, body, config) => {
  const res = await fetch(
    endpoint,
    config || {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : null,
    },
  );

  return res;
};

export default httpRequest;

const httpMiddleware = async (...params) => {
  try {
    const res = await httpRequest(...params);
    const contentType = res.headers.get('content-type');

    if (contentType && contentType.indexOf('application/json') !== -1) {
      return res.json();
    }
    return res.text();
  } catch (err) {
    console.log(err);
  }
};

export const http = {
  get: (endpoint) => httpMiddleware(endpoint, 'GET'),
  post: (endpoint, body) => httpMiddleware(endpoint, 'POST', body),
  put: (endpoint, body) => httpMiddleware(endpoint, 'PUT', body),
};
