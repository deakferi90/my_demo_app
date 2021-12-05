import RestHelper from "./RestHelper";

class PlayTestApi {
    gerCats() {
        const url = '/auth/testcats';
        return RestHelper.get(url);
    }
}

export default new PlayTestApi();