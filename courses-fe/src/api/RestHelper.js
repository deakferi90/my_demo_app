import axios from "axios";

const base = "localhost:3000";

const axiosInstance = axios.create({
    baseURL: base
});

class RestHelper {
    constructor(instanceOne) {
        this.instance = instanceOne;
    }

    getUrl(url) {
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