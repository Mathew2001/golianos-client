import requests from "./httpService";

const pageServices = {
  getAllPagesByBusinessId(id) {
    return requests.get(`/page/getallbybusinessid/${id}`);
  },
};

export default pageServices;