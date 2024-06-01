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
    {url: "../../../assets/Trabajo/thumb/thumb_Clothes.jpg",
     name: "Clothes"},
    {url: "../../../assets/Trabajo/thumb/thumb_Dawn.jpg",
     name: "Rysn and Chiri-Chiri"},
    {url: "../../../assets/Trabajo/thumb/thumb_Diagrama.jpg",
      name: "The Diagram"},
    {url: "../../../assets/Trabajo/thumb/thumb_Frodo.jpg",
      name: "Frodo Baggins"},
    {url: "../../../assets/Trabajo/thumb/thumb_Hoid.jpg",
      name: "Hoid's Life"},
    {url: "../../../assets/Trabajo/thumb/thumb_HoidSpirits.jpg",
      name: "Hoid Across the Cosmere"},
    {url: "../../../assets/Trabajo/thumb/thumb_Tress.jpg",
      name: "Tress",
      size: "horizontal"},
    {url: "../../../assets/Trabajo/thumb/thumb_Storm.jpg",
      name: "Clashing Clouds - Words of Radiance"},
    {url: "../../../assets/Trabajo/thumb/thumb_Yumi.jpg",
      name: "Yumi"},
    {url: "../../../assets/Trabajo/thumb/thumb_Zellion.jpg",
      name: "Zellion"} 
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
