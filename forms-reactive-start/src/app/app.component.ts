import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenNames = ['Chris','Anna']
  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    }); 

    //this.signupForm.valueChanges.subscribe(value=> console.log(value));
    this.signupForm.statusChanges.subscribe(status=> console.log(status));
  }

  onSubmit(){
    console.log(this.signupForm);
  }
  onAddHobby() {
    const hobby = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(hobby);
  }

  forbiddenName(control: FormControl): {[s:string]: boolean} {
    if(this.forbiddenNames.indexOf(control.value) != -1){
      return {'nameIsForbidden': true};
    }
    return null
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if (control.value === 'test@test.com'){
          resolve({'nameIsForbidden': true});
        }
        else {
          resolve(null);
        }
      },1500)
    });
  }
}
