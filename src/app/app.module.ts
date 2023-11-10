import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { TextFormattingPipe } from './core/pipes/text-formatting.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TextFormattingPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...env.auth0,
      httpInterceptor: {
        allowedList: [
          `${env.api.serverUrl}/api/messages/admin`,
          `${env.api.serverUrl}/api/messages/protected`,
          `${env.api.serverUrl}/api/account/create`,
          `${env.api.serverUrl}/api/account/find`,
        ],
      },
    }),
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
