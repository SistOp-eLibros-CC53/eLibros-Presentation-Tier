import http from '../../shared/services/http-common.js';
import {BaseService} from "../../shared/services/base.service.js";

export class BooksApiService extends BaseService {
    complementUrl = '/books';
}