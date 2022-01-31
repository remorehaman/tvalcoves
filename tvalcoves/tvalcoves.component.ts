import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs-compat/operator/map';
// import { debounceTime } from 'rxjs-compat/operator/debounceTime';
// import { distinctUntilChanged } from 'rxjs-compat/operator/distinctUntilChanged';
// import "rxjs/add/operator/debounceTime";
 import "rxjs/add/operator/map";
 import { CustomservicesService } from 'src/app/service/customservices.service';
 import { environment } from 'src/environments/environment';
 import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-tvalcoves',
  templateUrl: './tvalcoves.component.html',
  styleUrls: ['./tvalcoves.component.css']
})
export class TvalcovesComponent implements OnInit {

  siteUrl =  environment.siteUrl
  tv_alcoves : any;
  srr : any;
  mama : any
   i = 2;
  public term: string;
  showButton:boolean;
  kaka:string;
  loadedData : any;
  ifStore:any;
  spinnerName : string;
  spinnerType: string
  newLength:any
  
  //tvlist: Tv[];


  // dataarr = [
  //   {id:1,name:"sam"},
  //   {id:2,name:"mama"},
  //   {id:3,name:"kaka"},
  //   {id:4,name:"dad"},
  //   {id:5,name:"hha"}
  // ]

  constructor(private tvalcovesservices:CustomservicesService,private http:HttpClient,private spinner: NgxSpinnerService) {}

 // private term = new FormControl()
 
  ngOnInit(): void {

    this.spinnerName = "sp1"
    this.spinnerType = "square-jelly-box"
   
    
    // this.term.valueChanges
    // .pipe(
    //   debounceTime(400),
    //   distinctUntilChanged()
    // ).subscribe(searchTerm =>{
    //   this.http.get('https://jsonplaceholder.typicode.com/albums/${searchTerm}').subscribe(
    //     data =>{
    //       console.log("new http request",data)
    //     }
    //   )
    // }
      
    // )
      

    // if(this.term != this.srr){
    //   alert();
    // }


    // const sour = from(this.dataarr)
    // sour.pipe(filter(mem => mem.id < 5),toArray())
    // .subscribe(
    //   res =>{
    //     console.log(res)
    //   }
    // )


// -----------------------managining by state--------------------

    // if(this.tvalcovesservices.manageState){
    //   // this.srr = this.tvalcovesservices.manageState.slice(0,3);
    //   this.srr = this.tvalcovesservices.manageState
    //   console.log('if block')
    // }
    // else{
    //   this.tvalcovesservices.getTvalcovesList().subscribe(
    //     data =>{
    //       this.tv_alcoves = data;
    //       this.srr = this.tv_alcoves
    //      // this.srr = this.tv_alcoves.slice(0,3)
    //       console.log("else",this.srr);
    //       this.tvalcovesservices.manageState = data;
    //     }
    //   )
    // }

// ---------------------------normal load more-------------------

  this.tvalcovesservices.getTvalcovesList().subscribe(
      data =>{
        this.tv_alcoves = data;
        this.mama = this.tv_alcoves;
        // console.log("count->",this.mama.length)
        this.srr = this.mama.slice(0,2)
        console.log("else",this.srr);
        this.showButton = true;
      
      }
    )
    

    // -----------------------managining by state--------------------

    // if(this.tvalcovesservices.manageState){
    //   //this.tvalcovesservices.manageState = this.newMama;  
    //   this.srr = this.tvalcovesservices.manageState
    //  // this.srr = this.getItems();
    //   this.showButton = true
    //   console.log('if block',this.srr)
    // }
    // else{
    //   this.tvalcovesservices.getTvalcovesList().subscribe(
    //     data =>{
    //       this.tv_alcoves = data;
    //       this.mama = this.tv_alcoves;
    //       // console.log("count->",this.mama.length)
    //       this.srr = this.mama.slice(0,2)
   
    //       console.log("else",this.srr);
    //       this.tvalcovesservices.manageState = this.tv_alcoves.slice(0,2)
    //       //console.log("m", this.tvalcovesservices.manageState)
    //       this.showButton = true;
        
    //     }
    //   )
      
    // }
   
  
  }
 
  getItems(){
   
    if(this.srr?.length < this.mama?.length){
      let newLength = this.srr?.length + 2;
      if (newLength > this.tv_alcoves.length) {
          newLength = this.tv_alcoves.length;
      }
      this.srr = this.tv_alcoves.slice(0, newLength);
      this.loadedData = this.srr;
      this.showButton = true;
      console.log("new item",this.loadedData);

    }
    else if(this.srr?.length == this.mama?.length){
      this.showButton = false;
      this.kaka = "No more products Found"


    }
   
   
     
  }

// ---------------on scrolling-------------

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
     
      if(this.srr?.length < this.mama?.length){
       this.spinner.show(this.spinnerName);
       
       this.newLength = this.srr?.length + 2;
       setTimeout(() => {
       
       })
       this.spinner.hide(this.spinnerName);
        // setTimeout(() => {
        //   this.spinner.hide(this.spinnerName);
        // }, 2000);
        if (this.newLength > this.tv_alcoves.length) {
            this.newLength = this.tv_alcoves.length;
        }
        this.srr = this.tv_alcoves.slice(0, this.newLength);
        this.loadedData = this.srr;
        //this.spinner.hide(this.spinnerName);
        //this.showButton = true;
        console.log("new item",this.loadedData);
  
      }
      else if(this.srr?.length == this.mama?.length){
        //this.showButton = false;
        this.kaka = ""
      }
    }
  }
  


}
