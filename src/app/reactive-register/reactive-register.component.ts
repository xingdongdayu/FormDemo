import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {equalValidator, mobileAsyncValidator, mobileValidator} from "../validator/validators";

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

  // // 自定义手机号校验器
  // mobileValidator(control: FormControl): any {
  //   var myreq = /^((13[0-9]{1})+\d{8})$/;
  //   let valid = myreq.test(control.value);
  //   console.log("mobile校验结果是"+valid);
  //   return valid ? null : {mobile: true}; // 返回null表示校验通过，没有通过会返回{mobile: true}
  // }
  // // 校验密码和密码验证是否相同
  // equalValidator(group: FormGroup): any {
  //   let password: FormControl = group.get("password") as FormControl;
  //   let pconfirm: FormControl = group.get("pconfirm") as FormControl;
  //   let valid: boolean = (password.value === pconfirm.value);
  //   console.log("密码校验结果："+valid);
  //   return valid ? null : {equal: true};
  // }
  // 使用FormBuilder工具
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validator: equalValidator})
    });
  }
  onSubmit() {
    // let isValid: boolean = this.formModel.get("username").valid;
    // console.log("username的校验结果："+isValid);
    // let errors: any = this.formModel.get("username").errors;
    // console.log("username的错误信息："+JSON.stringify(errors));

    // 当所有字段全都合法时，formModel才是合法的
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
  ngOnInit() {
  }

}
