import http from '../../shared/services/http-common.js';
import {BaseService} from "./base.service.js";
export class UsersApiService extends BaseService {
    complementUrl = '/users';

    getByUsernameAndPassword(username, password) {
        return http.get(`${this.complementUrl}?user=${username}&password=${password}`);
    }
}