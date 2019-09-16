import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  // messageForm: FormGroup;
  // submitted = false;
  // success = false;

  constructor() { }

  ngOnInit() {
    // this.messageForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   message: ['', Validators.required]
    // });
  }
  // onSubmit() {
  //   this.submitted = true;

  //   if (this.messageForm.invalid) {
  //       return;
  //   }
  // }
}
