import { Component, OnInit,Inject} from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FooterService} from './footer.service';
import { Contact } from '../../apex/entities/contact.entity';
import { Routes, RouterModule, Router, NavigationStart,NavigationEnd } from '@angular/router';
import { WINDOW } from '../../../app/services/window.service';  
import { DOCUMENT } from "@angular/platform-browser";
import { Location } from '@angular/common';
import { ContactForm } from '../../shared/common-form/app.form';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  UserDetailsForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  namePattern = '[a-zA-Z ]+$';
  myForm: any = ContactForm.init();
  profile: Contact = new Contact();

  constructor(private router: Router,private formBuilder: FormBuilder,
    @Inject(DOCUMENT) private document: Document,private footerService:FooterService) {
      ContactForm.edit(this.myForm);
      this.UserDetailsForm = this.formBuilder.group({
        'name': ['', [Validators.required, Validators.pattern(this.namePattern)]],
        'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        // 'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
      });

     }

  ngOnInit() {
  }
onSubmit(){
  
}
}
