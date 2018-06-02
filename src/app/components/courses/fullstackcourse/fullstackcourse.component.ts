import { Component, OnInit,Input,Inject,SimpleChange, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Props } from '../../../apex/common/props';
import {Meta, Title} from '@angular/platform-browser';
import {routes} from "../../../app-routing.module";
import {Router, ActivatedRoute} from "@angular/router";
import { Page } from '../../../apex/entities/page.entity';
import { ContactForm } from '../courses.form';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DOCUMENT } from "@angular/platform-browser";
import {CoursesService} from '../courses.service';
import { Contact } from '../../../apex/entities/contact.entity';
// import { WINDOW } from "../window.service";


@Component({
  selector: 'app-fullstackcourse',
  templateUrl: './fullstackcourse.component.html',
  styleUrls: ['./fullstackcourse.component.scss']
})
export class FullstackcourseComponent implements OnInit {
  page: Page = new Page();
  myForm: any = ContactForm.init();
  isShowModal:boolean = true;
  showForm:boolean = false;
  UserDetailsForm: FormGroup;
  isScrolled: any;
  stickyFooter: any;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  mobilePattern = '^[6-9][0-9]{9}$';
  namePattern = '[a-zA-Z ]+$';
  courseName: any='Full Stack';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
  selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 Full Stack Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking Full Stack Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'Full Stack Training in Hyderabad | Full Stack Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Full Stack training in hyderabad, Full Stack course in hyderabad, Full Stack certification in Hyderabad, Full Stack training institute in Hyderabad, digital lync'});
  
    title.setTitle('Full Stack Training in Hyderabad | Full Stack Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="fullstack-course-training-hyderabad";
    this.page.name="FullStack";
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
  }
  ];
courseData={ 
    name: "Full Stack", 
    description : "Full Stack Course", 
    courseType : "Both", 
    duration : "3 Months", 
    hours : 5, 
    why : "A FullStack web developer is someone who is able to work on both front-end and Back-end. Fullstack Developer is the highly demanded job in the market. This course helps to learn all the top notch development technologies.", 
    whyImage : "why-learn--digital-lync.png", 
    whyImageAlt : "why learn Full Stack", 
    careerHead : "", 
    courseImage : "Full Stack-digital-lync.png", 
    courseImageAlt : "Full Stack", 
    views :5750, 
    share : 123,  
    slug : "fullstack-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/Fullstack.pdf",  
    careers : [
        "Full Stack Developer",
        "Front-End Developer",
        "Back-End Developer"
    ], 
    pre : [
        "Full Stack Developer Front-End Developer Back-End Developer"
    ],
    subModules:[
      { 
        name : "Html", 
        description : "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications", 
        image : "assets/images/courses/fullstackcourse/html-digital-lync.png", 
        imageAlt : ""
    },
    { 
      name : "Css", 
      description : "CSS is the language for designing the presentation layer of web pages, through colors, structure, and fonts.", 
      image : "assets/images/courses/fullstackcourse/css-digital-lync.png", 
      imageAlt : ""
    },
    { 
      name : "Javascript", 
      description : "JavaScript often abbreviated as JS, is a high-level, interpreted programming language.", 
      image : "assets/images/courses/fullstackcourse/js-digital-lync.png", 
      imageAlt : ""
  },
  { 
    name : "Python",  
    description : "Python is a high level and object oriented scripting language. It is used as general purpose programming language.", 
    image : "assets/images/courses/fullstackcourse/python-digital-lync.png", 
    imageAlt : ""
},{  
  name : "React Js", 
  description : "React is a feasible, efficient most reliable source of the JavaScript library for building user interfaces.", 
  image : "assets/images/courses/fullstackcourse/react-digital-lync.png", 
  imageAlt : ""
},{ 
  name : "Angular Js", 
  description : "Angularjs is a Robust JavaScript Framework for dynamic web application.", 
  image : "assets/images/courses/fullstackcourse/angular-digital-lync.png", 
  imageAlt : ""
},{ 
  name : "Node Js", 
  description : "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side", 
  image : "assets/images/courses/fullstackcourse/node-digital-lync.png", 
  imageAlt : ""
},{ 
  name : "Express Js", 
  description : "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software.", 
  image : "assets/images/courses/fullstackcourse/ejs-digital-lync.png", 
  imageAlt : ""
},{ 
  name : "Mongodb", 
  description : "Mongodb is an Open Source and Nosql database. It is cross-platform and its document oriented database is written in C++.", 
  image : "assets/images/courses/fullstackcourse/mongo-db-digital-lync.png", 
  imageAlt : ""
},
  ],
    projects:[
      { 
        name : "Jobs Portal", 
        description : "In this project, we have two end users one is the Job Seeker and the other is the Recruiter. The Jobseeker applies for a job posted by all recruiters .The Recruiter will post job requirements and get all the details of jobseekers who applied for that job posted by him/her.", 
        image : "assets/images/courses/fullstackcourse/project1-fullstack-digital-lync.png", 
        imageAlt : "fullstackcourse", 
    },
    {
      name: "E-commerce Website",
      description:"E-commerce is a platform for buying and selling of goods and services,or the transmitting of funds and data, over an electronic network, primarily the internet.",
      image: "assets/images/courses/fullstackcourse/ecommerce-project-digital-lync.png",
      imageAlt:"Full Stack",
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="fullstack-course-training-hyderabad";
    this.page.slug="fullstack-course-training-hyderabad";
    this.coursesService.saveForm(this.profile).subscribe((data: any) => {
      console.log(data);
      if (data.status == '1') {
        setTimeout(function () {
        }, 2000);
        this.coursesService.navigateToThanksPage();
      }
    })
  }
  
  listClick(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue;
  }
  
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll($event) {
  //   let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  //   if (number > 912) {
  //     this.isScrolled = true;  
  //   } 
  //   else {
  //     this.isScrolled = false;
  //   }
  //   if (number > 1168 && number < 4900) {
  //     this.stickyFooter = true
  //   } else {
  //     this.stickyFooter = false
  //   }
  //   if(number > 1036){
  //     this.enrollBtn = true;
  //   }else{
  //     this.enrollBtn = false;
  //   }
  // }
  ngOnInit() {
  //   this.routes.events
  // .filter((event) => event instanceof NavigationEnd)
  // .map(() => this.activatedRoute)
  // .map((route) => {
  //   while (route.firstChild) route = route.firstChild;
  //   return route;
  // })
  // .filter((route) => route.outlet === 'primary')
  // .mergeMap((route) => route.data)
  // .subscribe((event) => {
  //   this._seoService.updateTitle(event['title']);
  //   //Updating Description tag dynamically with title
  //   this._seoService.updateDescription(event['title'] + event['description'])
  // });

  }

}


