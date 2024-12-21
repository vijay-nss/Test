import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PatternLockComponent } from './pattern-lock/pattern-lock.component';
import { QRComponent } from './qr/qr.component';

export const routes: Routes = [
  { path: '', redirectTo: 'QR', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pattern', component: PatternLockComponent },
  { path: 'QR', component: QRComponent },
];
