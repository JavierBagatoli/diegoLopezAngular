import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'diegolopez';
  visible: boolean = false;
  pageTwo = false;

  urlImageToShow : string = ""
  nameImageToShow : string = ""

    showDialog() {
        this.visible = true;
    }

    asingImage(element: {url: string, name: string}){
      if(element.url.endsWith(".jpeg")){
        this.urlImageToShow = element.url.replaceAll("thumb/thumb_", "").replaceAll(".jpg",".jpeg")
      }else{
        this.urlImageToShow = element.url.replaceAll("thumb/thumb_", "")
      }
      console.log(this.urlImageToShow)
      this.nameImageToShow = element.name
      this.visible = true
    }

    clean(){
      this.urlImageToShow = ""
      this.nameImageToShow = ""
    }
}
