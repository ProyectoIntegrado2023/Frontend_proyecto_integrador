import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private cookieSrv: CookieService
  ){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.cookieSrv.get('token') ?? '';
    let reqClone = req;
    if(token != '') {
      reqClone = req.clone({
        headers: req.headers.set('authorization', 'Bearer ' + token)
      })
    }
    return next.handle(reqClone).pipe(
      catchError(this.manejoError)
    )
  }

  private manejoError(error: HttpErrorResponse) {
    return throwError('ocurrio un error');
  }

}
