import { Component, EventEmitter, Input, OnChanges, OnInit, Output, input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',

})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem: MenuItem | undefined;
  showDatos: boolean = false
  @Output() pageTwo = new EventEmitter<boolean>();

  ngOnInit() {
      this.items = [{label: 'Work',icon: ''},
          { label: 'Portfolio', icon: ''},
          { label: 'To Behance', icon: ''},
          { label: 'To Artstation', icon: ''},
          { label: 'About Me', icon: ''}
      ];

      this.activeItem = this.items[0];
  }

  changes(argument: any): void {
    console.log(argument)
      if(argument.label === this.items[1].label){
        this.pageTwo.emit(true)
      }else{
        this.pageTwo.emit(false)
      }

      if(argument.label === this.items[2].label){
        window.open("https://www.behance.net/diegolopezart", "_blank");
      }
      
      if(argument.label === this.items[3].label){
        window.open("https://www.artstation.com/diegolopez_artist", "_blank");
      }
      
      

      if(argument.label === this.items[4].label){
        this.showDatos = true
      }else{
        this.showDatos = false
      }
    }
}

interface  MenuItem{
  label: string,
  icon: string,
}
