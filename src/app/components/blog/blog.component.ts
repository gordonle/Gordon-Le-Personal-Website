import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from "../../services/responsive.service";
import { NavService } from "../../services/nav.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
  public isMobile: boolean = false;
  public blogEntry: string;
  constructor(private respServ: ResponsiveService, private nav: NavService, private router: Router) { }

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

  public goToBlog = (entry: string) => {
    setTimeout(() => this.nav.changePage("none"), 1000);
    this.nav.openBlog(entry);
    let blogLink: string = "blog/" + entry;
    setTimeout(() => this.router.navigate([blogLink]), 100);
  }
}
