import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',

})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem: MenuItem | undefined;
  showDatos: boolean = false

  ngOnInit() {
      this.items = [{
          label: 'Work',
          icon: '', 
          items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
            },
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
            }
          ]
        
        
          },
          { label: 'Portfolio', icon: '', items: []},
          { label: 'Store', icon: '', items: []},
          { label: 'About Me', icon: '', items: [] }
      ];

      this.activeItem = this.items[0];
  }

  changes(argument: any): void {
    console.log(argument)
      if(argument.label === this.items[3].label){
        this.showDatos = true
      }else{
        this.showDatos = false
      }
      
    }
}

  

interface  MenuItem{
  label: string,
  icon: string,
  items: any[]
}
