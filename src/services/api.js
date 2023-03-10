const url = process.env.REACT_APP_API_STAGING_URL

export const headers = formData => {
    if (localStorage.jwt) {
      if (formData) {
        return {
          Authorization: `Bearer ${localStorage.jwt}`
        };
      }
      return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.jwt}`
      };
    }
    if (formData) {
      return {};
    }
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
};

export default class API {
    static genericErrorMessage(status) {
      return status === 404 ? 'Recurso no encontrado' : 'Inténtelo más tarde';
    }
  
    static get(route) {
      return fetch(url + route, {
        method: 'GET',
        headers: headers()
      });
    }
  
    static post(route, params = {}) {
      return fetch(url + route, {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify(params),
        headers: headers()
      });
    }
  
    static put(route, params = {}) {
      return fetch(url + route, {
        method: 'PUT',
        cache: 'no-cache',
        body: JSON.stringify(params),
        headers: headers()
      });
    }

    static patch(route, params = {}) {
        return fetch(url + route, {
          method: 'PATCH',
          cache: 'no-cache',
          body: JSON.stringify(params),
          headers: headers()
        });
      }
  
    static delete(route, params = {}) {
    console.log('delete')
      return fetch(url + route, {
        method: 'DELETE',
        body: JSON.stringify(params),
        headers: headers()
      });
    }
  }