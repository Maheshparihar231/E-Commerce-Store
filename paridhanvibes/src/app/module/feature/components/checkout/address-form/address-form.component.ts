import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {
  address=[1,1,1,1]

  constructor(
    private formBuilder:FormBuilder
  ){}
  myForm:FormGroup=this.formBuilder.group({
    firstName:["",Validators.required],
    lasttName:["",Validators.required],
    streetAddress:["",Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    zipCode:["",Validators.required],
    mobile:["",Validators.required],
  })

  handleCreateOrder(){}


  handleSubmit=()=>{
    const formValue=this.myForm.value
    console.log(formValue);
    
  }


}
