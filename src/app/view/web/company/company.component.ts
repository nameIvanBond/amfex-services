import {Component, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {NavService} from '@core/nav.service';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit{

  @ViewChild('videoCtrl') public videoCtrl;

  constructor(@Inject(DOCUMENT) public document: any,
              private renderer: Renderer2,
              public nav: NavService) {
  }
  ngOnInit() {
    if (this.nav.platformId === 'server'){
      this.videoCtrl.nativeElement.remove();
    }

    const aud = this.document.querySelector('video');

    aud.onplaying= () => {
      document.body.style.overflowY  = "hidden";
    };

    aud.onended= () => {
      document.body.style.overflowY  = "scroll";
      this.renderer.addClass(this.videoCtrl.nativeElement, 'disabled');
      document.getElementById("video_box").className = 'disabled';
      setTimeout(function()
      {
        document.getElementById("video_box").style.display = 'none';
      }, 1500);

    };
  }

  skip(){

    document.body.style.overflowY  = "scroll";
    this.renderer.addClass(this.videoCtrl.nativeElement, 'disabled');
    this.renderer.setStyle(this.videoCtrl.nativeElement,"display", 'none');
  }


  resizeFunction(event) {
    if(event.target.innerWidth < 960){
      this.videoCtrl.nativeElement.remove();
    }
  }



}
