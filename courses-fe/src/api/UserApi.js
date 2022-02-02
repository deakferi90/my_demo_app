import RestHelper from "./RestHelper";

class UserApi {

    login(credentials) {
        const url = 'auth/login'
        return RestHelper.post(url, credentials);
    }

    logout() {
        const url = 'auth/logout';
        return RestHelper.post(url, {});
    }

    logoutAllDevices() {
        const url = 'auth/logout/all';
        return RestHelper.post(url, {});
    }

    register(data) {
        const url = 'auth/register';
        return RestHelper.post(url, data);
    }
}
export default new UserApi();
