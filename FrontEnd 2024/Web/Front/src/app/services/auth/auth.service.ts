import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from 'src/app/models/auth/auth-model';
import { Credentials } from 'src/app/models/credentials/credentials-model';
import { BehaviorSubject, Observable, Subject, map, switchMap, tap } from 'rxjs';
import { CreateUserDTO, Profile } from 'src/app/models/user/user-model';
import { Purchase } from 'src/app/models/user/purchase-model';
import { Sale } from 'src/app/models/sale/sale-model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}`;
  private authApiUrl = `${environment.AUTH_API_URL}`;
  private currentUser!: Auth;
  private profile!: Profile | null;
  private profileListener = new BehaviorSubject<Profile | null>(null);

  constructor(
    private http: HttpClient
  ) { }

  loginUser(credentials: Credentials): Observable<Profile> {
    return this.http.post<Profile>(`http://127.0.0.1:8000/api/login/`, credentials);
  }

  // getProfile(token: string, userId: number) {
  //   const headers = new HttpHeaders();
  //   headers.set('Authorization',  `Bearer ${token}`);
  //   return this.http.get<User>(`${this.apiUrl}/profiles/${userId}`, {
  //     headers
  //   });
  // }

  // loginAndGet(credentials: Credentials) {
  //   return this.loginUser(credentials)
  //   .pipe(
  //     switchMap(response => this.getProfile(response.access_token, response.user.id)),
  //   );
  // }

  updateProfileListener(profile: Profile) {
    this.profile = profile;
    this.profileListener.next({ ...this.profile });
  }

  clearProfile() {
    this.profileListener.next(null);
  }

  getProfileListener() {
    return this.profileListener.asObservable();
  }

  logoutUser(): Observable<boolean> {
    console.log('logout');

    return this.http.post(`http://127.0.0.1:8000/api/logout/`, {}, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        return response.status === 200;
      })
    );
  }

  // getBookPurchases(userId: number): Observable<Sale[]> {
  //   const url = `${this.apiUrl}/sells?user_id=${userId}`; // Ajusta la URL para obtener las compras del usuario específico
  //   return this.http.get<Sale[]>(url);
  // }

}
