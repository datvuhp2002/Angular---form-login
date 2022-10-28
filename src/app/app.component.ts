import { Component } from '@angular/core';
import { GeneralService } from './shared/services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  
  title = 'formDangNhap';
  show = "none";
  constructor(public showModal: GeneralService) {

  }
  // handleOpenSignIn(){
  //   if(this.show === "none"){
  //     this.show = "block";
  //   }else{
  //     this.show ="none";
  //   }    
  // }
} 