import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CarruselArtComponent } from '../shards/carrusel-art/carrusel-art.component';
import { CarouselModule } from 'primeng/carousel';
import { TabMenuModule } from 'primeng/tabmenu';
import { NavbarComponent } from '../shards/navbar/navbar.component';
import { AboutInfoComponent } from '../shards/about-info/about-info.component';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CarruselArtComponent,
    NavbarComponent,
    AboutInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CarouselModule,
    TabMenuModule,
    ImageModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
