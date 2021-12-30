import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(){}

    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        var my_array= document.cookie.split(";");
        for(var i=0; i<my_array.length; i++){
            var name= my_array[i].substr(0,my_array[i].indexOf("="));
            var value= my_array[i].substr(my_array[i].indexOf("=")+1);
            if(name== 'token'){
                var secret =value;
                request= this.addAPIKeyToRequest(request,secret);
            }
        }

        return next.handle(request);
    }
    private addAPIKeyToRequest(request:HttpRequest<any>,secret:string){
        return request.clone({
            setHeaders:{
                'Authorization': `Bearer${secret}`
            }
        });
    }
}
export const TokenInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi:true},
];