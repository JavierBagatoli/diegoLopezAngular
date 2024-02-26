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
          {image: "../../../assets/ILLUSTRATIONS/IMG_0340.jpeg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/IMG_2028.jpeg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/IMG_3262.jpeg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/IMG_8058.jpeg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/IMG_8360.jpeg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/IMG_0340.jpeg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/IMG_0340.jpeg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/IMG_0340.jpeg",price: "dos", name: "nombre"},
          {image: "../../../assets/ILLUSTRATIONS/IMG_0340.jpeg",price: "dos", name: "nombre"},
        ]
        break;
      case  "COMIC":
        semiUrl = "COMIC"
        return [
          {image: `${this.basicUrl}${semiUrl}/02.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/01.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/03.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/04.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/05.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/06.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/07.jpeg`,price: "dos", name: "nombre"},
        ]
        break
      case  "PORTAFOLIO_ILUSTRACION":
        semiUrl = "PORTFOLIO_CONCEPT_ART"
        return [
          {image: `${this.basicUrl}${semiUrl}/1.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/2.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/3.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/4.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/5.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/6.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/7.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/8.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/9.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/10.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/11.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/12.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/13.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/14.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/15.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/16.jpeg`,price: "dos", name: "nombre"},
        ]
        break
      case  "PORTFOLIO_CONCEPT_ART":
        semiUrl = "PORTFOLIO_ILLUSTRATION"
        return [
          {image: `${this.basicUrl}${semiUrl}/1.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/2.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/3.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/4.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/5.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/6.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/7.jpeg`,price: "dos", name: "nombre"},
          {image: `${this.basicUrl}${semiUrl}/8.jpeg`,price: "dos", name: "nombre"},
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