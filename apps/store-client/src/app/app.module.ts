import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { LayoutModule } from './core/layout/layout.module';
import { ENV_TOKEN } from '@store-workspace/common';
import { environment } from '../environments/environmment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [
    {
      provide: ENV_TOKEN,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent, LayoutModule],
})
export class AppModule { }
