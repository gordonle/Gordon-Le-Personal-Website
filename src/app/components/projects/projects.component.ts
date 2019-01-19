import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ResponsiveService } from '../../services/responsive.service';
import { NavService } from "../../services/nav.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.less"]
})
export class ProjectsComponent implements OnInit {
  public isMobile: boolean;

  constructor(private router: Router,
              private respServ: ResponsiveService,
              private nav: NavService) { }

  public ngOnInit() {
    this.onResize();
    this.respServ.checkWidth();
    this.nav.changePage(this.router.url.substr(1));
  }

  public onResize = () => {
    this.respServ.getMobileStatus().subscribe((isMobile: boolean) => {
      this.isMobile = isMobile;
    });
  }

}
