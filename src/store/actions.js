import * as constants from './constants';
import http from '@/http';

export default {
    getUsers() {
        http.get("users").then(res => {
            console.log(res.data);
        });
    }
};
