export const apiRoute = 'http://localhost:8000';

//USER / LOGIN / REGISTER
export const registerRoute = '/users';
export const loginRoute = '/login';
export const updateUserRoute = '/user/';
export const showUserRoute = '/user';
export const logoutRoute = '/logout';

//CITY
export const getCitiesRoute = '/cidade';

//MODALITYS
export const getModalitysRoute = '/modalidades';

export const optionsFetch = ({ method, body = '', token = '', file }) => {
  if (method === 'POST')
    return {
      method: method,
      headers: file
        ? { Authorization: `Bearer ${token}` }
        : token
        ? {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        : { 'Content-Type': 'application/json' },
      body: file ? body : JSON.stringify(body),
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
