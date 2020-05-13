import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AboutComponent } from "./components/about/about.component";
import { AppComponent } from "./app.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterLinksComponent } from './components/footer-links/footer-links.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from "./components/nav/nav.component";
import { ProjectsComponent } from "./components/projects/projects.component";

import { BlogEntryComponent } from './components/blogEntry/blogEntry.component';

import { NavService } from "./services/nav.service";
import { ResponsiveService } from "./services/responsive.service";
import { AppRoutingModule } from ".//app-routing.module";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BlogComponent,
    BlogEntryComponent,
    ExperienceComponent,
    FooterLinksComponent,
    HomeComponent,
    ProjectsComponent,
    NavComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
  ],
  providers: [NavService, ResponsiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// add "./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css", to angular.json styles (2 places) for Angular Material