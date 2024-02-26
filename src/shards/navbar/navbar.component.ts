import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',

})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  activeItem: MenuItem | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Work', icon: 'pi pi-fw pi-home' },
          { label: 'Portafolio', icon: 'pi pi-fw pi-calendar' },
          { label: 'Store', icon: 'pi pi-fw pi-pencil' },
          { label: 'About Me', icon: 'pi pi-fw pi-cog' }
      ];

      this.activeItem = this.items[0];
  }
}

interface  MenuItem{
  label: string,
  icon: string
}
