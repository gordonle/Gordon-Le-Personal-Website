import { Component, OnInit } from '@angular/core';
import { NavService } from "../../services/nav.service";
import { ResponsiveService } from '../../services/responsive.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public isMobile: boolean = false;
  constructor(private nav: NavService, private respServ: ResponsiveService, private router: Router) { }

  public ngOnInit() {
    this.onResize();
    this.respServ.checkWidth();
    this.nav.changePage(this.router.url.substr(1))
  }

  public onResize = () => {
    this.respServ.getMobileStatus().subscribe((isMobile: boolean) => {
      this.isMobile = isMobile;
    });
  }

  public close = () => {
    this.nav.close();
  }
}
