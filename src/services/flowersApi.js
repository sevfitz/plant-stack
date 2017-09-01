import { request } from './request';

const URL = '/flowers';

export default {
    getAll() {
        return request.get(URL);
    },
    add(flower) {
        return request.post(URL, flower);
    },
    update(id) {
        return request.update(`${URL}/${id}`);
    }
};
