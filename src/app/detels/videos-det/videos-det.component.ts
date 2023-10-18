import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { RestService } from 'src/app/Servic/rest.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-det',
  templateUrl: './videos-det.component.html',
  styleUrls: ['./videos-det.component.css']
})

export class VideosDetComponent implements OnInit {
  
  dangerousVideoUrl: string;
  videoUrl: SafeResourceUrl;

  langId = '1'
  id
  name
  Details
  Date
  YouTubeLink
  bookImage
  link
  videos = false
  books = false
  LatestculturalTreasure
  constructor(
    public rest: RestService,
    private router: ActivatedRoute,
    private route :Router,
    private sanitizer: DomSanitizer
  ) {
    
   }


  ngOnInit() {
    this.getData()
  }
  getData() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
      this.rest.getCulturalTreasureDet(this.langId, this.id).subscribe((res: any) => {

          this.YouTubeLink = res.Link
          console.log(this.YouTubeLink)
          this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.YouTubeLink);
          console.log(this.videoUrl)
          this.name = res.Name
          this.Details = res.Details
          this.Date = res.Date
          console.log(res)
          this.videos = true
          this.books = false
      

      })
    });
  }

  runVideo(id){
    this.route.navigate(['/Videosdet', id]);
  }

}
