import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocRoutingModule } from './doc-routing.module';
import { DocComponent } from './doc.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DocSidenavComponent } from './doc-sidenav/doc-sidenav.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LayoutModule } from '@angular/cdk/layout';

import { AsPrismModule } from 'as-prism';
import 'prismjs/components/prism-typescript';
// import 'prismjs/components/prism-yaml';
// import 'prismjs/components/prism-scss';

@NgModule({
  declarations: [DocComponent, DocSidenavComponent],
  imports: [
    CommonModule,
    DocRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatProgressSpinnerModule,
    LayoutModule,
    AsPrismModule,
  ]
})
export class DocModule { }
