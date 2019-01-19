import { Component, OnInit } from '@angular/core';
import { NavService } from "../../services/nav.service";
import { ResponsiveService } from "../../services/responsive.service";
import { Router } from "@angular/router"

@Component({
  selector: 'app-blogEntry',
  templateUrl: './blogEntry.component.html',
  styleUrls: ['./blogEntry.component.less']
})
export class BlogEntryComponent implements OnInit {
  public isMobile: boolean = false;
  public blogEntry: string;
  public test: string = "";
  constructor(private router: Router, private nav: NavService, private respServ: ResponsiveService) {
    console.log("BLOG ENTRY: ", this.router.url);
    let temp = this.router.url.split("/");
    this.blogEntry = temp[temp.length - 1];
    this.nav.getBlog().subscribe((entry: string) => {
      this.blogEntry = entry;
    });
  }

  ngOnInit() {
    this.onResize();
    this.respServ.checkWidth();
    this.nav.changePage(this.router.url.substr(1));
  }

  public onResize = () => {
    this.respServ.getMobileStatus().subscribe((isMobile: boolean) => {
      this.isMobile = isMobile;
    });
  }

  public isBlog = (entry: string) : boolean => {
    return this.blogEntry == entry;
  }

}
