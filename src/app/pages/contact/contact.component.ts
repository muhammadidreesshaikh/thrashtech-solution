import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    number: new FormControl(''),
    message: new FormControl('')
  })

  data: any = {
    image: "../../../assets/img/banner-image/contact.jpg",
    heading: 'Contact',
    // subHeading: 'Build an engaging app.',
  };

  contactLogin() {
    console.log(this.contactForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
