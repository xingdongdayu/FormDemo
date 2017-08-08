import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {
  formModel: FormGroup;
  // constructor() {
  //   this.formModel = new FormGroup({
  //     username: new FormControl(),
  //     mobile: new FormControl(),
  //     passwordsGroup: new FormGroup({
  //       password: new FormControl(),
  //       pconfirm: new FormControl()
  //     })
  //   });
  // }
  // 使用FormBuilder工具
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: [''],
      mobile: [''],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: ['']
      })
    });
  }
  onSubmit() {
    console.log(this.formModel.value);
  }
  ngOnInit() {
  }

}
