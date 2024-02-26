import { Injectable } from '@angular/core';
import { item } from '../app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class traslateService {

  constructor() { }

  getInfo(): string[] {
    return [
        "SOY DIEGO LÓPE",
        "Resido en España y me gradué en Bellas Artes, en la Universidad Politécnica de Valencia. He trabajado en el sector editorial y me he especializado en ilustración y cómic.",
        "El cine y el cómic han sido grandes influencias a lo largo de mi vida, viéndose reflejado en lo mucho que disfruto contando historias a través de mis obras.",
        "Tengo conocimientos de animación y modelado 3D, así como de ilustración digital y pintura tradicional.",
        "Destacaría de mi trabajo el interés en innovar con las composiciones y la atención al detalle."
    ] 

    return[
        "I'M DIEGO LÓPEZ",
        "I live in Spain and I graduated in Fine Arts at the",
        "Polytechnic University in Valencia. I have worked in the publishing industry and have specialized in illustration and comics.",
        "Cinema and comic books have been great influences throughout my life, being reflected in how much l enjoy telling stories through my works.",
        "I have knowledge of animation and 3D modeling, as well as digital illustration and traditional painting.",
        "I would highlight my interest in innovating with compositions and attention to detail."
    ]
  }
}