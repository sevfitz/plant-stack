import { request } from './request';

const URL = '/cards';

export default {
    getAll() {
        console.log('inside cardApi');
        return request.get(URL);
    },
    add(card) {
        return request.post(URL, card);
    }
};
