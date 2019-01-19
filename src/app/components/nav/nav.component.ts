import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { NavService } from "../../services/nav.service";
import { ResponsiveService } from "../../services/responsive.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  public isMobile: boolean = false;
  public isMenuOpen: boolean = false;
  private currentPage: string = "";
  constructor(private nav: NavService,
              private respServ: ResponsiveService,
              private eRef: ElementRef,
              private router: Router) { }

  public ngOnInit() {
    this.onResize();
    this.navSubscribe();
    this.respServ.checkWidth();
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.nav.close();
    }
  }

  public onResize = () => {
    this.respServ.getMobileStatus().subscribe((isMobile: boolean) => {
      this.isMobile = isMobile;
    });
  }

  public navSubscribe = () => {
    this.nav.isOpen().subscribe((isOpen: boolean) => {
      this.isMenuOpen = isOpen;
    })
    this.nav.getPage().subscribe((page: string) => {
      this.currentPage = page;
    })
  }


  public toggleMenu = () => {
    if (this.isMenuOpen) this.nav.close();
    else this.nav.open();
  }

  public switchTabs = (goTo: string) => {
    this.nav.changePage(goTo);
  }

  public show = (page: string): boolean => {
    if (page === this.currentPage) return false;
    return true;
  }
}
