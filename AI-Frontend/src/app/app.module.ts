import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { SidebarnavComponent } from './sidebarnav/sidebarnav.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

import { MaterialModule } from './material-module';
import { PrimeNgModule } from "./primeng-material";
import { InstagramPostGeneratorComponent } from './instagram-post-generator/instagram-post-generator.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarnavComponent,
    UploadImageComponent,
    InstagramPostGeneratorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    PrimeNgModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
