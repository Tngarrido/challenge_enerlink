export const todosTypes = {
    INDEX_IN_REQUEST: 'INDEX_IN_REQUEST',
    INDEX_IN_SUCCESS: 'INDEX_IN_SUCCESS',
    INDEX_IN_FAILURE: 'INDEX_IN_FAILURE',
    PATCH_IN_REQUEST: 'PATCH_IN_REQUEST',
    PATCH_IN_SUCCESS: 'PATCH_IN_SUCCESS',
    PATCH_IN_FAILURE: 'PATCH_IN_FAILURE',
    POST_IN_REQUEST: 'POST_IN_REQUEST',
    POST_IN_SUCCESS: 'POST_IN_SUCCESS',
    POST_IN_FAILURE: 'POST_IN_FAILURE',
  };

 export const utilsTypes = {
    // ALERT
    SET_ALERT: 'SET_ALERT',
    CLOSE_ALERT: 'CLOSE_ALERT',
    SET_ALERT_ERROR: 'SET_ALERT_ERROR',
}

export const requestIndexTodos = params => ({
    type: todosTypes.INDEX_IN_REQUEST,
    params
});

export const requestPatchTodos = params => ({
    type: todosTypes.PATCH_IN_REQUEST,
    params
});

export const requestPostTodos = params => ({
    type: todosTypes.POST_IN_REQUEST,
    params
});


// ALERT
export const closeAlert = params => ({ type: utilsTypes.CLOSE_ALERT, params });
export const sendAlert = params => ({ type: utilsTypes.SET_ALERT, ...params });