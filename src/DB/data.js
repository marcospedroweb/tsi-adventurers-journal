export const apiRoute = 'http://localhost:8000';

export const registerRoute = '/users';

export const loginRoute = '/login';

export const updateUserRoute = '/user/';

export const showUserRoute = '/user';

export const logoutRoute = '/logout';

export const optionsFetch = ({ method, body = '', token = '' }) => {
  if (method === 'POST')
    return {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  else if (method === 'GET')
    return {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
};
