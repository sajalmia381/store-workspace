import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  themeMode: 'light' | 'dark' = 'light';
  
  toggleTheme(): void {
    // Need to implement
  }
  
  onLogout(): void {
    // Need to implement
  }
  
  toggleSidenav(): void {
    // Need to implement
  }
}
