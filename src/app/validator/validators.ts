import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";

// 自定义手机号校验器
export function mobileValidator(control: FormControl): any {
  var myreq = /^((13[0-9]{1})+\d{8})$/;
  let valid = myreq.test(control.value);
  console.log("mobile校验结果是"+valid);
  return valid ? null : {mobile: true}; // 返回null表示校验通过，没有通过会返回{mobile: true}
}
// 自定义手机号校验器，异步校验
export function mobileAsyncValidator(control: FormControl): any {
  var myreq = /^((13[0-9]{1})+\d{8})$/;
  let valid = myreq.test(control.value);
  console.log("mobile Async校验结果是"+valid);
  return Observable.of(valid ? null : {mobile: true}).delay(3000); // 将返回值放入流中返回。用delay是为了模拟连接服务器耗时
}
// 校验密码和密码验证是否相同
export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get("password") as FormControl;
  let pconfirm: FormControl = group.get("pconfirm") as FormControl;
  let valid: boolean = (password.value === pconfirm.value);
  console.log("密码校验结果："+valid);
  // return valid ? null : {equal: true};
  return valid ? null : {equal: {desc:"密码和确认密码不匹配"}};
}
