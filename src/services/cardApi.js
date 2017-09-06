import { request } from './request';

const URL = '/cards';

export default {
    getAll() {
        return request
            .get(URL)
            .then(res => {
                return res.body;
            },
            (response) => { throw new Error (response); }
            )
    },
    add(card) {
        return request
            .post(URL, card)
            .then(res => {
                console.log('res in add is', res);
                return res.body;
            },
            (response) => {
                console.log('response in error is', response);
                throw new Error(response);
            }
            )
    }
};
