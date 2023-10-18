import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { VideosListComponent } from './pages/videos-list/videos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VideosDetComponent } from './detels/videos-det/videos-det.component';
import { HeaderComponent } from './pages/header/header.component';
import { NgxNewstickerAlbeModule } from 'ngx-newsticker-albe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoComponent } from './pages/video/video.component';
import { VidDetComponent } from './detels/vid-det/vid-det.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    VideosListComponent,
    VideosDetComponent,
    HeaderComponent,
    VideoComponent,
    VidDetComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxNewstickerAlbeModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule ,
    NgxSpinnerModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

