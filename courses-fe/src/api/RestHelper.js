import axios from "axios";

const base = "http://localhost:3003";

const axiosInstance = axios.create({
    baseURL: base
});


axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${localStorage.getItem(
        "ACCESS_TOKEN",
      )}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

class RestHelper {
    constructor(instance) {
        this.instance = instance;
    }

    get(url) {
        return this.instance.get(url);
    }

    post(url, params) {
        return this.instance.post(url, params);
    }

    delete(url, params) {
        return this.instance.delete(url, params);
    }
    
    patch(url, params) {
        return this.instance.patch(url, params);
    }
}
export default new RestHelper(axiosInstance);
