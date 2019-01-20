import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ResponsiveService } from '../../services/responsive.service';
import { NavService } from "../../services/nav.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {
  public isMobile: boolean; 
  private showDescription: { [id: number] : boolean } = {
    0: false,
  };

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

  public toggleDescription = (id: number) => {
    this.showDescription[id] = !this.showDescription[id];
  }

  public isShowing = (id: number): boolean => {
    return this.showDescription[id];
  }

}
