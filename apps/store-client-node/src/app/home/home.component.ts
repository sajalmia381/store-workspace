import { Component, Inject, OnInit, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { ENV_TOKEN, IEnvironment } from '@store/common';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from '@angular/material/icon';
import { AsPrismModule } from 'as-prism';

import 'prismjs/components/prism-json';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'store-workspace-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, MatProgressSpinnerModule, MatIconModule, AsPrismModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  apiBaseUrl!: string | null;
  productEndpoint = '/products/running-sneaker';
  code!: string;
  productRes: any;
  isProductLoading!: boolean;
  
  constructor(@Optional() @Inject(ENV_TOKEN) private env: IEnvironment, private http: HttpClient) {}
  
  ngOnInit(): void {
    this.apiBaseUrl = this.env.nodeApiBaseUrl;
    
    this.code = `
fetch('${this.apiBaseUrl + this.productEndpoint}')
  .then(response => response.json())
  .then(json => console.log(json))`;
  }
  
  fetchProduct(): void {
    this.isProductLoading = true;
    this.http.get(this.apiBaseUrl + this.productEndpoint).subscribe(
      res => {
        this.productRes = res;
        this.isProductLoading = false;
      },
      res => {
        this.isProductLoading = false;
        this.productRes = res.error;
        console.error(res);
      }
    );
  }
}
