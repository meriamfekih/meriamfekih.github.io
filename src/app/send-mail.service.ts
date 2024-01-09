import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SendMailService {

    constructor(private httpClient: HttpClient) {
    }

    public sendMessage(body) {
        console.log(body)
        return this.httpClient.post('http://localhost:3000/api/sendmail', body);
    }
}
