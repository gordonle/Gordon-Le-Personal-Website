import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./components/about/about.component";
import { BlogComponent } from "./components/blog/blog.component";
import { BlogEntryComponent } from "./components/blogEntry/blogEntry.component";
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from "./components/projects/projects.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "me", component: AboutComponent },
  { path: "blog", component: BlogComponent, },
  { path: "blog/:id", component: BlogEntryComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "experience", component: ExperienceComponent},
  { path: "**", redirectTo: ""},
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
})
export class AppRoutingModule { }
