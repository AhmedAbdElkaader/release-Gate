import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Servic/rest.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  Lang = "1"
  count = '24'
  current = 1
  showHightLighted = true
  Arr = []
  latestsvideos = []
  queryField: FormControl = new FormControl("");
  query = ""
  constructor(public rest: RestService, private router: Router ) { 
  }

  ngOnInit() {
    this.query = ""
    this.queryField.valueChanges.subscribe((queryFieldValue: string) => {
      if (this.queryField.value == undefined) {
        this.getData()
        this.query = ""
        this.showHightLighted = true
      }else if(this.queryField.value == ""){
        this.query = ""
        this.getData()
        this.showHightLighted = true
      }else {
        this.query = queryFieldValue
        if(this.query.length > 1){
          this.rest.searchCultureVideos(this.Lang, queryFieldValue,this.count,this.current).subscribe((res: any) => {
            console.log(res)
            console.log(queryFieldValue)
            if (res.length != 0) {
              this.Arr = res
              this.showHightLighted = false
            }
          })
        }
      }
    })
  }

  getData(){
    this.current = 1
    this.rest.getVideos(this.Lang, this.count, this.current).subscribe((res: any) => {
      this.Arr = res.Normal
      this.latestsvideos = res.Heighlited
      console.log(res)
    })
  }

  goToDet(id) {
    this.router.navigate(['/Videosdet', id]);
  }



  onScroll() {
    
    console.log("hi iam query " ,this.query.length)
   if(this.query.length == 0){

    this.current = this.current + 1
    
    this.rest.getVideos(this.Lang, this.count, this.current).subscribe((res: any) => {
      console.log(res)

      let ArrayResp :any
      ArrayResp = res 
      if(ArrayResp.Normal.length != 0){
        for (let i = 0; i < ArrayResp.Normal.length; i++) {
          this.Arr.push(ArrayResp.Normal[i])
          console.log('done')
        }
      }
      console.log("hih" , this.Arr)

    })
  }
}

}
