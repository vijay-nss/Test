import { Component, OnInit } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
})
export class QRComponent implements OnInit {
  title = 'QR Code Generator';
  qrCodeData: string = 'https://example.com';

  constructor() {}

  ngOnInit(): void {
    this.generateQRCode(this.qrCodeData);
  }

  generateQRCode(data: string): void {
    const canvas = document.getElementById('qr-code') as HTMLCanvasElement;
    QRCode.toCanvas(canvas, data, (error:any) => {
      if (error) console.error(error);
      console.log('QR code generated!');
    });
  }
}
