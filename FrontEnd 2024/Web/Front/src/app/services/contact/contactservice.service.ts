import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SendContact } from 'src/app/models/contact/contact-model';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  constructor(private http: HttpClient) { }

  sendContact (contact: SendContact):Observable<any>{
    return this.http.post<any>("http://127.0.0.1:8000/api/add-contact/", contact)
  }
}
