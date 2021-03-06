import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import *  as html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    //   let element = document.getElementById("id");
    //   console.log(element);
    //   html2canvas(document.body).then(function (canvas) {
    //     // Convert the canvas to blob
    //     canvas.toBlob(function (blob) {
    //       // To download directly on browser default 'downloads' location
    //       let link = document.createElement("a");
    //       link.download = "image.png";
    //       link.href = URL.createObjectURL(blob);
    //       link.click();

    //       // To save manually somewhere in file explorer
    //       //  window.saveAs(blob, 'image.png');

    //     }, 'image/png');
    //   });
    // }
    // title = 'LatestAngularVer';
    /**
     *
     */
  }
  constructor() {


  }

  ngOnDestroy() {
    console.log('on destroy');
    localStorage.clear();
  }

  @HostListener("window:beforeunload", ["$event"])
  clearLocalStorage(event) {
    localStorage.removeItem('hi');
    console.log('####Destroy local storage####');
  }
}
