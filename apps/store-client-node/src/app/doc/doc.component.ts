import { Component, Inject, OnDestroy, OnInit, Optional, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeWhile } from 'rxjs/operators';
import DOC_DATA from './doc-data';
import { ENV_TOKEN, IEnvironment } from '@store/common';

@Component({
  selector: 'store-workspace-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss']
})
export class DocComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isAlive = true;
  docData = DOC_DATA;
  isSmallDevice!: boolean;
  isSidenavExpand = true;
  apiBaseUrl: string;
  
  constructor(@Optional() @Inject(ENV_TOKEN) env: IEnvironment, private breakpointObserver: BreakpointObserver, private title: Title) {
    this.apiBaseUrl = env.nodeApiBaseUrl;
    this.breakpointObserver
      .observe(['(max-width: 991px)'])
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(({ matches }) => {
        this.isSmallDevice = matches;
        if (matches) {
          this.isSidenavExpand = false;
        } else {
          this.isSidenavExpand = true;
        }
      });
  }

  ngOnInit(): void {
    this.title.setTitle("Documentation | StoreRestApi")
  }
  ngOnDestroy(): void {
    this.isAlive = false;
  }
  toggleSidenav(): void {
    this.sidenav.toggle();
    this.isSidenavExpand = this.sidenav.opened;
  }
}
