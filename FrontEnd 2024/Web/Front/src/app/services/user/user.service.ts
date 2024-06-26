import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, CreateUserDTO } from 'src/app/models/user/user-model';
import { Observable } from 'rxjs';
import { Purchase } from 'src/app/models/user/purchase-model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = 'http://localhost:8000/';

  private apiURL = `${environment.API_URL}`;

/*  private authApiUrl = `${environment.AUTH_API_URL}/register/`; */

  constructor(
    private http: HttpClient
  ) { }

  createUser(userData: any) {
    return this.http.post(`${this.baseURL}api/register/`, userData);
  }

  getPersonalData(id: number): Observable<CreateUserDTO> {
    const url = `${this.apiURL}/profiles/${id}`;
    return this.http.get<CreateUserDTO>(url);
  }

  getPurchaseHistory(): Observable<Purchase[]> {
    const url = `${this.apiURL}/sales/`;
    return this.http.get<Purchase[]>(url);
  }
}
