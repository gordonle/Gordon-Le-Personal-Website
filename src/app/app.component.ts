import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from "./services/responsive.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'Gordon Le';

  constructor(private responsiveService: ResponsiveService) { }

  public ngOnInit() {
    this.responsiveService.getMobileStatus().subscribe((isMobile: boolean) => { });
    this.onResize();
  }

  public onResize = () => {
    this.responsiveService.checkWidth();
  }

  public onActivate = (event: Event) => {
    window.scroll(0,0);
  }
}
