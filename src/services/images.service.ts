import { Injectable } from '@angular/core';
import { item } from '../app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  basicUrl :string =  "../../../assets/";

  constructor() { }

  getImages(type: string): item[] {
    let semiUrl: string
    switch (type) {
      case "ILUSTRATIONS":
        return [
          {image: "../../../assets/ILLUSTRATIONS/thumb/thumb_IMG_0340.jpg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/thumb/thumb_IMG_2028.jpg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/thumb/thumb_IMG_3262.jpg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/thumb/thumb_IMG_8058.jpg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/thumb/thumb_IMG_8360.jpg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/thumb/thumb_IMG_0340.jpg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/thumb/thumb_IMG_0340.jpg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/thumb/thumb_IMG_0340.jpg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/thumb/thumb_IMG_0340.jpg",price: "dos", name: "nombre"},
        ]
        break;
      case  "COMIC":
        semiUrl = "COMIC"
        return [
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_02.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_01.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_03.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_04.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_05.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_06.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_07.jpg`,price: "dos", name: "nombre"},
        ]
        break
      case  "PORTAFOLIO_ILUSTRACION":
        semiUrl = "PORTFOLIO_CONCEPT_ART"
        return [
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_1.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_2.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_3.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_4.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_5.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_6.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_7.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_8.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_9.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_10.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_11.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_12.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_13.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_14.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_15.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_16.jpg`,price: "dos", name: "nombre"},
        ]
        break
      case  "PORTFOLIO_CONCEPT_ART":
        semiUrl = "PORTFOLIO_ILLUSTRATION"
        return [
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_1.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_2.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_3.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_4.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_5.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_6.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_7.jpg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/thumb/thumb_8.jpg`,price: "dos", name: "nombre"},
        ]
        break
      default:
        [{image: "../../../assets/ILLUSTRATIONS/IMG_0340.jpeg",price: "dos", name: "nombre"},
         {image: "../../../assets/ILLUSTRATIONS/IMG_0340.jpeg",price: "dos", name: "nombre"}
      ]
        break;
    }  

    return [{image: "../../../assets/ILLUSTRATIONS/IMG_0340.jpeg",price: "dos", name: "nombre"},
    {image: "../../../assets/ILLUSTRATIONS/IMG_0340.jpeg",price: "dos", name: "nombre"}
 ]
  }
}