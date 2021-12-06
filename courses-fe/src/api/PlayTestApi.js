import RestHelper from "./RestHelper";

class PlayTestApi {
    getCats() {
        const url = '/auth/testcats';
        return RestHelper.get(url);
    }

    getDogs() {
        const url = '/auth/testdogs';
        return RestHelper.get(url);
    }
}

export default new PlayTestApi();