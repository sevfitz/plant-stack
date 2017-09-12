import { request } from './request';

const URL = '/cards';

export default {
    getAll() {
        return request.get(URL);
    },
    add(card) {
        return request.post(URL, card);
    },
    remove(id) {
        return request.delete(`${URL}/${id}`);
    }
};
