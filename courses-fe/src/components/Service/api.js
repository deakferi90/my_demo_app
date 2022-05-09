//import axios from "axios";
import RestHelper from "../../api/RestHelper";

export const getData = async () => {
    const endpoint = "https://jsonplaceholder.typicode.com/posts";
  try {
        const { data } = await RestHelper.post(endpoint, {
            userId: 1,
            id: 101,
            title: 'Feri is learning axios',
            body: 'His friend Alex helped him a lot and he is grateful'
        });
        return JSON.stringify(data, null, 3);
    } catch (err) {
        console.error(err);
    }
};


