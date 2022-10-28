import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../shared/services/general.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  inputEmail:string = "none";
  getValue(event: Event){
    // event.target.value sẽ nhận được giá trị truyền về từ textbox.
    // Sau đó vứt giá trị đó sang cho biến label.
    this.inputEmail = (event.target as HTMLInputElement).value;
  }
  submit(){
    
    if(this.inputEmail.length !== null)
      return true
    else{
      
      return false;
    }
  }
  constructor(public showModal: GeneralService) {
  }

  ngOnInit(): void {
  }

}
