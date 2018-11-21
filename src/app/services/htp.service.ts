import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(
        private httpClient: HttpClient
    ) {}
    
    doGet(url: string, extraParams?: any) {
        return this.httpClient.get(url, extraParams);
    }
}