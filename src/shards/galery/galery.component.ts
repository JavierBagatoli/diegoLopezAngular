import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: `./galery.component.html`,
  styleUrl: './galery.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaleryComponent implements OnInit {
  @Output() imageSelected = new EventEmitter<any>();

  vector = [
    {url: "../assets/Trabajo/Clothes.jpg",
     name: "Rysn and Chiri-Chiri"}
    ,
    {url: "../assets/Trabajo/Clothes.jpg",
     name: ""}
    ,
    {url: "../assets/Trabajo/Dawn.jpg",
      name: ""}
     ,
     {url: "../assets/Trabajo/Diagrama.jpg",
      name: ""}
     ,
     {url: "../assets/Trabajo/Frodo.jpg",
      name: ""}
     ,
     {url: "../assets/Trabajo/Hoid.jpg",
      name: ""}
     ,
     {url: "../assets/Trabajo/HoidSpirits.jpg",
      name: ""}
     ,
     {url: "../assets/Trabajo/Storm.jpg",
      name: "",
      size: "horizontal"
    }
     ,
     {url: "../assets/Trabajo/Tress.jpg",
      name: ""}
    ,
    {url: "../assets/Trabajo/Yumi.jpg",
      name: ""}
    ,
    {url: "../assets/Trabajo/Clothes.jpg",
      name: ""}
     ,
     {url: "../assets/Trabajo/Yumi.jpg",
      name: ""}
    ,
    {url: "../assets/Trabajo/Yumi.jpg",
      name: ""},
      {url: "../assets/Trabajo/Tress.jpg",
       name: ""}
     ,
     {url: "../assets/Trabajo/Yumi.jpg",
       name: ""}
     ,
     {url: "../assets/Trabajo/Clothes.jpg",
       name: ""}
      ,
      {url: "../assets/Trabajo/Yumi.jpg",
       name: ""}
     ,
     {url: "../assets/Trabajo/Yumi.jpg",
       name: ""}

    
    
    
    
    
  ]

  ngOnInit(): void {
    const img = new Image();
    this.vector.forEach(
      image => {
        img.src = image.url;
        console.log(image.url, img.naturalWidth, img.naturalHeight)
      }
    )
  }

  selectImage(element : any){
    let dato : string = element.url

    let dato2 = dato.slice(6)
    
    this.imageSelected.emit(
        {url: dato2,
         name: element.name
        })
}
 }
