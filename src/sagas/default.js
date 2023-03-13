import { call, put, race, delay} from 'redux-saga/effects';
import { utilsTypes } from 'actions/todos';

const globalTimeout = 15 * 1000;
const timeoutMessage = 'Está tardando demasiado, verifica tu conexión a internet e intenta nuevamente';


function* runDefaultSaga(callRequest, successCallback, failureCallback) {
    try {
      const { response, timeout } = yield race({
        response: call(callRequest.request, callRequest.params),
        timeout: delay(globalTimeout)
      });
  
      if (timeout) throw new Error(timeoutMessage);
  
      if (response.ok) {
        const result =
          response.status === 204 ? { success: true } : yield response.json();
        yield successCallback(result, response, callRequest.params);
      } else if (response.status === 401) {
        yield response.json().then(data => {
          throw new Error(
            data.error || 'Ocurrió un problema en la autenticación'
          );
        });
      } else if (response.status === 403) {
        yield response.json().then(data => {
          throw new Error(
            data.error || 'Necesitas autorización para realizar esta acción'
          );
        });
      } else {
        yield response.json().then(data => {
          throw new Error(data.message || 'Hubo un problema. Vuelva a intentar.');
        });
      }
    } catch (error) {
      yield failureCallback(error, callRequest.params);
      yield put({
        type: utilsTypes.SET_ALERT,
        kind: 'error',
        message: error.message
      });
    }
  }

  export default runDefaultSaga;