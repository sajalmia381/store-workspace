import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { ENV_TOKEN } from '@store-workspace/common';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [
    {
      provide: ENV_TOKEN,
      useValue: environment
    }
  ],
})
export class RemoteEntryModule {}
