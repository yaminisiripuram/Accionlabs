/**
 * userService: Http service calls made here
 * @author:Yamini
 */

/** doc: angular core */
import { Injectable } from '@angular/core';

/** doc:services */
import { HttpService } from '../../../services/htp.service';

@Injectable()
export class UserService {
    constructor(
        private httpService: HttpService
    ) { }

    /** get Call to pull the data */
    getUserPosts() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        return this.httpService.doGet(url, {});
    }
}