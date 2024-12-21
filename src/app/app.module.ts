import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { FormsModule } from '@angular/forms';
import { QRComponent } from './qr/qr.component';
import { LoginComponent } from './login/login.component';
import { PatternLockComponent } from './pattern-lock/pattern-lock.component';
import { AppComponent } from './app.component';
import { SentimentComponent } from './sentiment/sentiment.component';

@NgModule({
  declarations: [
    AppComponent, 
    QRComponent,   
    LoginComponent,
    PatternLockComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'QR', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'pattern', component: PatternLockComponent },
      { path: 'QR', component: QRComponent },
      { path: 'sentiment', component: SentimentComponent },
    ]) 
  ],
  providers: [ApiService],  
  bootstrap: [AppComponent] 
})
export class AppModule {}
