import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RazorpayService {
  private apiUrl = 'http://192.168.1.13:3000';

  constructor(private http: HttpClient) {}

  createOrder(amount: number, currency: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-order`, { amount, currency });
  }

  savePaymentData(paymentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/savePayment`, paymentData);
  }
}
