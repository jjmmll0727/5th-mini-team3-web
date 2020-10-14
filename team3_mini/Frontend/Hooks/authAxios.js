import axios from "axios";
import readCookie from "../Hooks/getCookie"

const authAxios = axios.create({
    baseURL: "http://54.180.189.240:3000/api",
    headers: {
      'authorization' : `${readCookie("authorization")}`
    }
  })
  
export default authAxios