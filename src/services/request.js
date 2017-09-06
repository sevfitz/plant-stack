import superagent from 'superagent';

export const API_URL = '/api';

const wrap = cmd => cmd
    .then(
        r => {
            return r.body;
        },
        ({ response }) => {
            throw response.body.error;
        }
    );

export const request = {
    get(url) {
        console.log('inside request, url is', url);
        return wrap(superagent.get(`${API_URL}${url}`));
    },
    post(url, data) {
        return wrap(superagent.post(`${API_URL}${url}`).send(data));
    }
};
