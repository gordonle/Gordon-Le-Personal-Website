import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ResponsiveService } from "../../services/responsive.service";
import { NavService } from "../../services/nav.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.less"]
})
export class AboutComponent implements OnInit {
  public isMobile: boolean = false;
  public message: number = 0;
  public messages: string[] = ["here's a lil bit about me", 
                                "passionate about cuisine", 
                                "tried cardio once", 
                                "eats faster than you",
                                "sings really loudly",
                                "hard gainer",
                                "pretend guitarist",
                                "sings in the shower",
                                "retired amateur league player",
                                "has a pet turtle",
                                "belieber",
                                "loves you",
                                "not tall but not short",
                                "sorts his sock drawer",
                                "dislikes olives",
                                "scored a goal in soccer once"];
  private msgTimer = setTimeout(()=>{}, 0);
  
  constructor(private respServ: ResponsiveService,
              private nav: NavService,
              private router: Router) { }

  public ngOnInit() {
    this.onResize();
    this.respServ.checkWidth();
    this.msgTimer = setTimeout(() => this.newMessage(), 7500);
    this.nav.changePage(this.router.url.substr(1));
  }

  public onResize = () => {
    this.respServ.getMobileStatus().subscribe((isMobile: boolean) => {
      this.isMobile = isMobile;
    });
  }

  public newMessage = () => {
    let oldVal = this.message;
    while (oldVal == this.message) this.message = Math.floor((Math.random() * (this.messages.length - 1)));
    clearTimeout(this.msgTimer);
    this.msgTimer = setTimeout(() => {
      this.newMessage();
    }, 10000);
  }
}
