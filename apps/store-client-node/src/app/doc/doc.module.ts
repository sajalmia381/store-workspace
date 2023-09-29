import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocRoutingModule } from './doc-routing.module';
import { DocComponent } from './doc.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DocSidenavComponent } from './doc-sidenav/doc-sidenav.component';

import 'prismjs/components/prism-typescript';
import { AsPrismModule } from 'as-prism';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import 'prismjs/components/prism-yaml';
// import 'prismjs/components/prism-scss';

@NgModule({
  declarations: [DocComponent, DocSidenavComponent],
  imports: [
    CommonModule,
    DocRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatIconModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AsPrismModule,
  ]
})
export class DocModule { }
