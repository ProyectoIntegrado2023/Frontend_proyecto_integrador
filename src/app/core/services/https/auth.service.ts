import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { environment_api } from 'src/environments/environment.spring';
import { CookieService } from 'ngx-cookie-service';

interface User {
  username: string;
  password: string;
}
interface ValidateUser {
  Message: string;
  Username: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private messajeSuccessfull: string = 'Authenticacion Correcta';
  private url: string = environment_api + 'login';
  constructor(
    private http: HttpClient,
    private cookieSrv: CookieService
  ){}

  login(username: string, password: string): Observable<boolean>{
    const data: User = { username, password }
    this.cookieSrv.delete('token');
    return this.http.post<ValidateUser>(this.url, data).pipe(
      tap(({ Message, token }) => {
        if (Message === this.messajeSuccessfull) {
          this.cookieSrv.set('token', token);
        }
      }),
      map(({Message}) =>  Message === this.messajeSuccessfull),
      catchError(error => {
        return throwError(error);
      })
    );
  }
}
