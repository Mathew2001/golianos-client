import businessServices from "../services/businessServices"

export const BUSINESS_ACTIONS = {
  GET_BUSINESS_TO_CLIENT_LOADING: "GET_BUSINESS_TO_CLIENT_LOADING",
  GET_BUSINESS_TO_CLIENT_SUCCESS: "GET_BUSINESS_TO_CLIENT_SUCCESS",
  GET_BUSINESS_TO_CLIENT_FAILURE: "GET_BUSINESS_TO_CLIENT_FAILURE",
}

export const getBusinessToClient = () => async (dispatch) => {
  dispatch({ type: BUSINESS_ACTIONS.GET_BUSINESS_TO_CLIENT_LOADING })
  try {

    const response = await businessServices.getBusinessToClient()

    if(response){
      dispatch({ type: BUSINESS_ACTIONS.GET_BUSINESS_TO_CLIENT_SUCCESS, payload: response })
    }
  } catch (error) {
    dispatch({ type: BUSINESS_ACTIONS.GET_BUSINESS_TO_CLIENT_FAILURE, payload: error.message })
  }
}