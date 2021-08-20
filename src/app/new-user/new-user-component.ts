import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@Angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user-component',
  templateUrl: './new-user-component.html',
  styleUrls: ['./new-user-component.scss']
})
export class NewUserComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      drinkPreference: ''
    });
  }

  onSubmitForm() {
    const userForm = this.userForm.value;
    const newUser = new User(
      userForm['firsteName'],
      userForm['lastName'],
      userForm['email'],
      userForm['drinkPreference']
    );
    this.userService.addUser( newUser );
    this.router.navigate(['/users']);
  };

}
