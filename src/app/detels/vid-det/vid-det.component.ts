import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/Servic/rest.service';
import { NgxSpinnerService } from "ngx-spinner";
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-vid-det',
  templateUrl: './vid-det.component.html',
  styleUrls: ['./vid-det.component.css']
})
export class VidDetComponent implements OnInit {

  FormArr = []
  showMasg = false
  showErorr = false
  BookId ;

  bookForm : FormGroup

  constructor(private route :Router,private rest : RestService, 
    private spinner: NgxSpinnerService,
    private activeRoute : ActivatedRoute
    ) { }

  ngOnInit() {
    this.bookForm = new FormGroup ({
      emailControl : new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')
      ])),
      nameOfControl: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z ]{1,20}')
      ])),
      mobileNumber: new FormControl('',Validators.compose([
        Validators.required,
        Validators.min(1111111111)
      ]))
    })
    this.getData()
  }

  getData(){
    this.activeRoute.params.subscribe(params => {
      this.BookId = params['id']; 
   });
    this.rest.getFrom().subscribe((res : any) => {
      console.log(res)
      res[0].control = 'emailControl'   
      res[1].control = 'nameOfControl'  
      res[2].control = 'mobileNumber'
      for(let i = 0 ; i < res.length ; i ++){
        
        if(res[i].Name == 'رقم المحمول'){
          res[i].DataType = 'Number'
        }
      }
      this.FormArr = res
  
    })
  }

  

  getForm(){
    console.log(this.bookForm.value)
    let formResult = this.bookForm.value
    formResult[this.FormArr[0].Name] = formResult['emailControl'];
    formResult[this.FormArr[1].Name] = formResult['nameOfControl'];
    formResult[this.FormArr[2].Name] = formResult['mobileNumber'];
    delete formResult['emailControl'];
    delete formResult['nameOfControl'];
    delete formResult['mobileNumber'];

    const arr = Object.keys(formResult).map(key => ({Name: key, value: formResult[key]}));
    console.log(arr)

    this.rest.setForm(arr,this.BookId)
      this.rest.getRes().subscribe(res => {
        console.log(res)
        if(res == true){
          this.spinner.hide();
          this.showMasg = true
          this.showErorr = false
          setTimeout(() => {
            this.route.navigateByUrl('/videos');
          }, 3000);
        }else{
          this.showErorr = true
        }
      })
  }

}
