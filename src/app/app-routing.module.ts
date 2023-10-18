import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosDetComponent } from './detels/videos-det/videos-det.component';
import { VideosListComponent } from './pages/videos-list/videos-list.component';
import { VideoComponent } from './pages/video/video.component';
import { VidDetComponent } from './detels/vid-det/vid-det.component';


const routes: Routes = [
  { path: "", component: VideosListComponent },
  { path: "videos", component: VideosListComponent },
  { path: 'Videosdet/:id', component: VideosDetComponent },
  { path: 'vid', component: VideoComponent },
  { path: 'viddet/:id', component: VidDetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
