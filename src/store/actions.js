import * as constants from './constants';
import http from '@/http';

export default {
    getUsers() {
        http.get("https://jsonplaceholder.typicode.com/users").then(res => {
            console.log(res.data);
        });
    }
};
