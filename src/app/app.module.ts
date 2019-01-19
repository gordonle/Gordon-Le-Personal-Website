import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AboutComponent } from "./components/about/about.component";
import { AppComponent } from "./app.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FooterLinksComponent } from './components/footer-links/footer-links.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from "./components/nav/nav.component";
import { ProjectsComponent } from "./components/projects/projects.component";

import { BlogEntryComponent } from './components/blogEntry/blogEntry.component';

import { NavService } from "./services/nav.service";
import { ResponsiveService } from "./services/responsive.service";
import { AppRoutingModule } from ".//app-routing.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BlogComponent,
    NavComponent,
    ProjectsComponent,
    HomeComponent,
    FooterLinksComponent,
    BlogEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [NavService, ResponsiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
