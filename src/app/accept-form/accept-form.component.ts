import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-accept-form',
  templateUrl: './accept-form.component.html',
  styleUrls: ['./accept-form.component.css']
})
export class AcceptFormComponent implements OnInit {

  pattern = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";

  ip_addressForm: FormGroup;
  get ip_address() {
    return this.ip_addressForm.get('ip_address') as FormArray;
  }

  display_saved = false;

  ipAddress;

  user = localStorage.getItem("user")

  store_ip_address = [];

  key_up(){
      this.display_saved = false;
      localStorage.removeItem("basic_ip_address");
      localStorage.removeItem("premium_ip_address");
  }

  save() {
    var ip_address = this.ip_addressForm.value.ip_address;
    for (var i = 0; i < ip_address.length; i++) {
      if ( i != 0 && ip_address[i].ip_address_value == "") {
        this.ip_address.removeAt(i);
      }
     else if (this.ip_addressForm.value.ip_address.length > 1 && ip_address[0].ip_address_value == "") {  
      this.ip_address.removeAt(0);
      }
      if(ip_address[i].ip_address_value == "")return false;
  }
  let formValue = { ...this.ip_address.value };
  for(let pop in formValue){
    if(!formValue[pop]) {
      delete formValue[pop];
    }
    if(Array.isArray(formValue[pop])) {
      let resultArray = formValue[pop].filter(item => item);
      if(resultArray.length > 0) {
        formValue[pop] = resultArray;
      } else {
        delete formValue[pop];
      }
    }
  }
  if(localStorage.getItem("user")=="basic"){
    this.display_saved = true;
    localStorage.setItem("basic_ip_address",JSON.stringify(formValue))
  }
  if(localStorage.getItem("user")=="premium"){
    this.display_saved = true;
    localStorage.setItem("premium_ip_address",JSON.stringify(formValue))
  }
}

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ip_addressForm = this.formBuilder.group({
      ip_address: this.formBuilder.array([
        this.formBuilder.group({
          ip_address_value: ['', Validators.pattern(
            this.pattern
          )],
        })
      ])
    });
  }

  limit_baic = 5;
  limit_premium = 10;
  addElement(index) {
    if (localStorage.getItem("user") == "basic") {
      if (index + 1 < this.limit_baic) {
        this.ip_address.push(this.formBuilder.group({
          ip_address_value: ['', Validators.pattern(
            this.pattern
          )],
        })
        );
      }
    }
    else if (localStorage.getItem("user") == "premium") {
      if (index + 1 < this.limit_premium) {
        this.ip_address.push(this.formBuilder.group({
          ip_address_value: ['', Validators.pattern(
            this.pattern
          )],
        }));
      }
    }
  }
  minusElement(index) {
    // console.log(this.ip_addressForm.value.ip_address.length)
    if (this.ip_addressForm.value.ip_address.length == 1) {
      this.ip_addressForm = this.formBuilder.group({
        ip_address: this.formBuilder.array([
          this.formBuilder.group({
            ip_address_value: ['', Validators.pattern(
              this.pattern
            )],
          })
        ])
      });
    }
    else {
      this.ip_address.removeAt(index)
    }
  }
}
