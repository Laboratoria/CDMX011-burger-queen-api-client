import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ResponsProducts, Product } from '../orders/interfaces/interfaces.orders';
import { AuthService } from '../../auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

private _historialClient: string[] = [];
private _historialMenu: string[] = ["Desayuno", "Comida"]
private _baseUrl: string = environment.baseUrl;
public productsMenu: Product[]=[];
public contador: number = 0;




get historialClient(){
  return [...this._historialClient]
}

get historialMenu(){
  return [...this._historialMenu]
}

listClient(cliente:string){
    cliente= cliente.trim().toLocaleLowerCase()
    
        this._historialClient.push(cliente);
        this._historialClient=this._historialClient.splice(0,10);
        localStorage.setItem('historialCliente', JSON.stringify(this._historialClient))
    
}
  constructor(private http:HttpClient, private authService: AuthService) { 
    this._historialClient= JSON.parse(localStorage.getItem('historialCliente')! )|| [];
  }

 private createRequestOption(){
   const headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.authService.user.token}`,
    })
   return headers
 }

  buscarMenu(query:string){
    let options = this.createRequestOption();
     let params = new HttpParams()
        .set('type', `${query.toLocaleLowerCase()}`);
      
    const url = `${this._baseUrl}/products`
    return this.http.get<ResponsProducts>(url,{ headers: options, params: params  })
       .subscribe(resp=>{ 
         console.log(resp.products)
         this.productsMenu=resp.products;
        
       })
  }

 
}
