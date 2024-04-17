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
          {image: "../../../assets/ILLUSTRATIONS/thumb/thumb_IMG_0340.jpg",price: "dos", name: "Jasnah Soulcaster - The Way of Kings"},
          {image: "../../../assets/ILLUSTRATIONS/thumb/thumb_IMG_2028.jpg",price: "dos", name: "The Sunlit Man"},
          {image: "../../../assets/ILLUSTRATIONS/thumb/thumb_IMG_3262.jpg",price: "dos", name: "Honor is dead? - Words of Radiance"},
          {image: "../../../assets/ILLUSTRATIONS/thumb/thumb_IMG_8058.jpg",price: "dos", name: "The Diagram"},
          {image: "../../../assets/ILLUSTRATIONS/thumb/thumb_IMG_8360.jpg",price: "dos", name: "Rysn & Chiri-Chiri"},
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
        semiUrl = "portfolio_ilustration"

        return [
          {image: `${this.basicUrl}${semiUrl}/0_portfolio.png`,price: "dos", name: "Start Portfolio"},
          {image: `${this.basicUrl}${semiUrl}/1_The_Sunlit_Man.png`,price: "dos", name: "The Sunlit Man"},
          {image: `${this.basicUrl}${semiUrl}/2_Sliver_of_Infinity.png`,price: "dos", name: "Sliver of Infinity"},
          {image: `${this.basicUrl}${semiUrl}/3_Luz_del_Ocaso_commission_cover_Book.png`,price: "dos", name: "Luz del Ocaso - Commission Cover Book"},
          {image: `${this.basicUrl}${semiUrl}/4_Taberna_del_Balrog_Private_Commission.png`,price: "dos", name: "Taberna del Balrog - Private Commission"},
          {image: `${this.basicUrl}${semiUrl}/5_The_Spear_that_Would_Break.png`,price: "dos", name: "The Spear that Would Break"},
          {image: `${this.basicUrl}${semiUrl}/6_Oxide_Room_205_Concept_Art.png`,price: "dos", name: "Oxide Room 205 - Concept Art"},
          {image: `${this.basicUrl}${semiUrl}/7_Rysn_&_Chiri_Chiri.png`,price: "dos", name: "Rysn & Chiri-Chiri"},
          {image: `${this.basicUrl}${semiUrl}/8_Honor_is_Dead.png`,price: "dos", name: "Honor is Dead"},
          {image: `${this.basicUrl}${semiUrl}/9_The_Diagram.png`,price: "dos", name: "The Diagram"},
          {image: `${this.basicUrl}${semiUrl}/contact.png`,price: "dos", name: "Contact Me"},
        ]

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
        semiUrl = "portfolio_concept"
        return [
          {image: `${this.basicUrl}${semiUrl}/1.Wasyl_Dit_Character_Design.png`,price: "dos", name: "Wasyl Dit - Character Design"},
          {image: `${this.basicUrl}${semiUrl}/2.Hazels_Restaruant_concept.png`,price: "dos", name: "Hazel’s Restaruant Concept"},
          {image: `${this.basicUrl}${semiUrl}/3.Cosmeresona_Character_Design.png`,price: "dos", name: "Cosmeresona. Character Design"},
          {image: `${this.basicUrl}${semiUrl}/4_Sprens_Creature Creation.png`,price: "dos", name: "Sprens - Creature Creation"},
          {image: `${this.basicUrl}${semiUrl}/5_Kandra_Creature_Creation.png`,price: "dos", name: "Kandra - Creature Creation"},
          {image: `${this.basicUrl}${semiUrl}/6_DrArialis_&_Dila_Character_Desgin.png`,price: "dos", name: "Dr.Arialis & Dila - Character Desgin"},
          {image: `${this.basicUrl}${semiUrl}/7_Odopdod_Character_Design.png`,price: "dos", name: "Odopdod - Character Design"},
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