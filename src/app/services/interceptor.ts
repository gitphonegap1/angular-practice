import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { catchError, filter,map, throwError } from "rxjs";

export const InterceptorService: HttpInterceptorFn = (request?:any, next?:any) => {
    return next(request).pipe(
        catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }),
        filter((event:any)=>{
            return event instanceof HttpResponse
        }),
        map((event: HttpResponse<any>)=>{
            return event
        })
    );
}