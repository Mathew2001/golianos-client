import requests from "./httpService"

const businessServices = {
  getBusinessToClient(){
    return requests.get("/business/toclient")
  }
}

export default businessServices