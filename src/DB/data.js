// export const apiRoute = 'http://18.222.111.91';
export const apiRoute = 'http://localhost:8000';

//USER / LOGIN / REGISTER
export const registerRoute = '/users';
export const loginRoute = '/login';
export const updateUserRoute = '/user/';
export const showUserRoute = '/user';
export const showOtherUserRoute = '/users/';
export const logoutRoute = '/logout';

//ACTIVITIES
export const activitiesSearchRoute = '/atividades';
export const getGuiaActivitiesRoute = '/atividades/id/';

//CITY
export const getCitiesRoute = '/cidade';

//MODALITYS
export const getModalitysRoute = '/modalidades';

//CART
export const addInCartRoute = '/carrinho';
export const getCartRoute = '/carrinho';
export const updateCartRoute = '/carrinho/';
export const deleteItemCartRoute = '/carrinho/';
export const deleteAllCartRoute = '/carrinho/all';

//ORDER
export const completeOrderRoute = '/itensdopedido';
export const getOrdersRoute = '/itensdopedido';
export const updateOrdersRoute = '/itensdopedido/';
export const getOrdersByIdRoute = '/itensdopedido/id/';

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
  else if (method === 'GET' && body)
    return {
      method: method,
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        : { 'Content-Type': 'application/json' },
      body: body,
    };
  else if (method === 'PUT' && body)
    return {
      method: method,
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        : { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
  else
    return {
      method: method,
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        : { 'Content-Type': 'application/json' },
    };
};
