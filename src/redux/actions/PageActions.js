import pageServices from "../services/PageServices";

export const GET_ALL_PAGES_BY_BUSINESS_ID_LOADING = "GET_ALL_PAGES_BY_BUSINESS_ID_LOADING";
export const GET_ALL_PAGES_BY_BUSINESS_ID_SUCCESS = "GET_ALL_PAGES_BY_BUSINESS_ID_SUCCESS";
export const GET_ALL_PAGES_BY_BUSINESS_ID_FAIL = "GET_ALL_PAGES_BY_BUSINESS_ID_FAIL";

export const getAllPagesByBusinessId = (id) => async (dispatch) => {
  dispatch({ type: GET_ALL_PAGES_BY_BUSINESS_ID_LOADING });
  try {
    const res = await pageServices.getAllPagesByBusinessId(id);
    if (res) {
      dispatch({ type: GET_ALL_PAGES_BY_BUSINESS_ID_SUCCESS, payload: res });
    }
  } catch (error) {
    dispatch({ type: GET_ALL_PAGES_BY_BUSINESS_ID_FAIL, payload: error?.response?.data?.message || "Error getting all pages by business id" });
  }
};
