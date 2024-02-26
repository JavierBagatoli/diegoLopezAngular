import { Component, Input } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { item, typesImages } from '../../app/interfaces/interfaces';

@Component({
  selector: 'app-carrusel-art',
  templateUrl: './carrusel-art.component.html',
  styleUrl: './carrusel-art.component.scss',
})

export class CarruselArtComponent {
    @Input() type : string = ""
    @Input() title : string = ""

    visible: boolean = false;
    products: item[] = [
        {image: "../../../assets/ILLUSTRATIONS/IMG_0340.jpeg",price: "dos", name: "nombre"},
    ];
    responsiveOptions: any[] | undefined;

    constructor(private productService: ImagesService) {}
    
    ngOnInit() {
        this.products = this.productService.getImages(this.type)
        this.responsiveOptions = this.selectResponsive()
    }
    
    showDialog() {
        this.visible = true;
    }

    selectResponsive(){
        if(this.type == "COMIC"){
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
        }else{
            return [
                {
                    breakpoint: '2150px',
                    numVisible: 4,
                    numScroll: 2
                },
                {
                    breakpoint: '1400px',
                    numVisible: 4,
                    numScroll: 2
                },
                {
                    breakpoint: '1300px',
                    numVisible: 3,
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
