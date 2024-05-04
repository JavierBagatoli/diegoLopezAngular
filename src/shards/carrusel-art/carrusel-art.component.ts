import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { item } from '../../app/interfaces/interfaces';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-carrusel-art',
  templateUrl: './carrusel-art.component.html',
  styleUrl: './carrusel-art.component.scss',
})

export class CarruselArtComponent {
    @Input() type : string = ""
    @Input() title : string = ""

    @Output() imageSelected = new EventEmitter<any>();

    visible: boolean = false;
    products: item[] = [
        {image: "../../../assets/ILLUSTRATIONS/IMG_0340.jpeg",price: "dos", name: "nombre"},
    ];
    responsiveOptions: any[] | undefined;

    constructor(private productService: ImagesService) {}
    
    selectImage(element : any){
        let dato : string = element.image

        let dato2 = dato.slice(6)
        
        this.imageSelected.emit(
            {url: dato2,
             name: element.name
            })
    }

    ngOnInit() {
        this.products = this.productService.getImages(this.type)
        this.responsiveOptions = this.selectResponsive()
    }
    
    showDialog() {
        this.visible = true;
    }

    selectResponsive(){
        if(this.type === "ILUSTRATIONS"){
            return [
                {
                    breakpoint: '3000px',
                    numVisible: 5,
                    numScroll: 2
                },
                {
                    breakpoint: '2150px',
                    numVisible: 4,
                    numScroll: 2
                },
                {
                    breakpoint: '1600px',
                    numVisible: 3,
                    numScroll: 2
                },
                {
                    breakpoint: '1300px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '1220px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '950px',
                    numVisible: 1,
                    numScroll: 1
                }
            ];
        }else if(this.type === "COMIC"){
            return [
                {
                    breakpoint: '2150px',
                    numVisible: 5,
                    numScroll: 2
                },
                {
                    breakpoint: '1400px',
                    numVisible: 5,
                    numScroll: 2
                },
                {
                    breakpoint: '1300px',
                    numVisible: 4,
                    numScroll: 2
                },
                {
                    breakpoint: '1220px',
                    numVisible: 4,
                    numScroll: 2
                },
                {
                    breakpoint: '1000px',
                    numVisible: 3,
                    numScroll: 2
                },
                {
                    breakpoint: '900px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '650px',
                    numVisible: 1,
                    numScroll: 1
                }
            ];
        }else if(this.type === "PORTAFOLIO_ILUSTRACION" || this.type === "PORTFOLIO_CONCEPT_ART"){
            return [
                {
                    breakpoint: '4000px',
                    numVisible: 4,
                    numScroll: 2
                },
                {
                    breakpoint: '3000px',
                    numVisible: 3,
                    numScroll: 2
                },
                {
                    breakpoint: '2000px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '1325px',
                    numVisible: 1,
                    numScroll: 1
                }
            ];
        }else{
            return [
                {
                    breakpoint: '2150px',
                    numVisible: 3,
                    numScroll: 2
                },
                {
                    breakpoint: '1400px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '1300px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '1220px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '1000px',
                    numVisible: 1,
                    numScroll: 1
                }
            ];
        }
    }
 }
