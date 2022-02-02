import axios from 'axios';

export const getData = () => {
    return axios.get('https://randomuser.me/api').then(({ data }) => {
        return JSON.stringify(data, null, 3);
    }).catch((err) => {
        console.error(err);
    });
};
