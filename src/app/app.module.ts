import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';

import { ButtonModule }   from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TabMenuModule }  from 'primeng/tabmenu';
import { ImageModule }    from 'primeng/image';
import { SidebarModule }  from 'primeng/sidebar';
import { DialogModule }   from 'primeng/dialog';
import { MenubarModule }  from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarruselArtComponent } from '../shards/carrusel-art/carrusel-art.component';
import { LowerZoneComponent }   from '../shards/lower-zone/lower-zone.component';
import { NavbarComponent }      from '../shards/navbar/navbar.component';
import { AboutInfoComponent }   from '../shards/about-info/about-info.component';
import { GaleryComponent } from '../shards/galery/galery.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselArtComponent,
    NavbarComponent,
    AboutInfoComponent,
    GaleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CarouselModule,
    TabMenuModule,
    ImageModule,
    SidebarModule,
    BrowserAnimationsModule,
    DialogModule,
    LowerZoneComponent,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
