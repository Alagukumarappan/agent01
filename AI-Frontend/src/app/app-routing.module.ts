import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SidebarnavComponent } from "./sidebarnav/sidebarnav.component";
import { UploadImageComponent } from "./upload-image/upload-image.component";
import { InstagramPostGeneratorComponent } from "./instagram-post-generator/instagram-post-generator.component";

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent},
  { path: 'sidebar', component: SidebarnavComponent},
  { path: 'anytoany', component: UploadImageComponent},
  { path: 'instagrampostgenerator', component: InstagramPostGeneratorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
