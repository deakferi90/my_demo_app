import RestHelper from "./RestHelper";

class UserApi {

    login(credentials) {
        const url = 'auth/login'
        return RestHelper.post(url, credentials);
    }
}
export default new UserApi();