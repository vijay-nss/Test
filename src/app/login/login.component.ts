import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ChatService } from '../service/chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RazorpayService } from '../service/RazorpayService';
import { HttpClient } from '@angular/common/http';

declare const Razorpay: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private razorpayService: RazorpayService, private http: HttpClient) {}
title:any="";
  payWithRazorpay() {
    this.title="Clicked"
    const amount = 1;
    const currency = 'INR';

    this.razorpayService.createOrder(amount, currency).subscribe((order: any) => {
      const options = {
        key: 'rzp_live_ImuFmDkcehlyja',
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: 'Test Payment',
        description: 'Angular Razorpay Integration',
        handler: (response: any) => {
          console.log('Payment Success:', response);
        },
        prefill: {
          name: 'John Doe',
          email: 'johndoe@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
      };
      const razorpay = new Razorpay(options);
      razorpay.open();
    });
  }
}
