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
  selector: 'app-pythoncourse',
  templateUrl: './pythoncourse.component.html',
  styleUrls: ['./pythoncourse.component.scss']
})
export class PythoncourseComponent implements OnInit {
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
  courseName: any='Python';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
    selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 Python Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking Python Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'Python Training in Hyderabad | Python Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Python training in hyderabad, Python course in hyderabad, Python certification in Hyderabad, Python training institute in Hyderabad, digital lync'});
  
    title.setTitle('Python Training in Hyderabad | Python Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="python-course-training-hyderabad";
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
  }
  ];
courseData={ 
    name: "Python", 
    description : "Python Course", 
    courseType : "Both", 
    duration : "7 Weeks", 
    hours : 5, 
    why : "Python is one of the most popular,easy,fully-functional and versatile language which can be used to make games,do data analysis,control robot and hardware. It is even used to create GUIs and websites.", 
    whyImage : "why-learn-Python-digital-lync.png", 
    whyImageAlt : "why learn Python", 
    careerHead : "It has revealed that the Python programming language is presently the most popular language for Data Scientists, Software Engineer, Research Analyst and Software Developer.", 
    courseImage : "Python-digital-lync.png", 
    courseImageAlt : "Python", 
    views :5750, 
    share : 123,  
    slug : "Python-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/Python.pdf",  
    careers : [
        "Python Developer"
    ], 
    pre : [
        "Basic knowledge of Computer Science"
    ],
    subModules:[
      { 
        name : "Introduction", 
        description : "Motivation & Applicability to various domains, Installation & Setting up path, Interactive shells & IDE’s", 
        image : "assets/images/courses/pythoncourse/modules.svg", 
        imageAlt : ""
    },
    { 
      name : "Variables and Data Types", 
      description : "Numbers and Operators, Reading data from keyboard, String Manipulation & Accessing Strings", 
      image : "assets/images/courses/pythoncourse/modules.svg", 
      imageAlt : ""
    },
    { 
      name : "Conditional Statements", 
      description : "If - else statements, If-elif- else statements, Nested if-else statements", 
      image : "assets/images/courses/pythoncourse/modules.svg", 
      imageAlt : ""
  },
  { 
    name : "Control flow",  
    description : "For & While loops, Nested loops, Break & Continue statements", 
    image : "assets/images/courses/pythoncourse/modules.svg", 
    imageAlt : ""
},{  
  name : "Lists", 
  description : "Accessing List, List Comprehension, Function and Methods", 
  image : "assets/images/courses/pythoncourse/modules.svg", 
  imageAlt : ""
},{ 
  name : "Tuple", 
  description : "Accessing Tuples, Working & Tuple Comprehension, Functions and Methods", 
  image : "assets/images/courses/pythoncourse/modules.svg", 
  imageAlt : ""
},{ 
  name : "Dictionaries", 
  description : "Accessing values in Dictionaries, Working with Dictionaries, Functions and Methods", 
  image : "assets/images/courses/pythoncourse/modules.svg", 
  imageAlt : ""
},
{ 
  name : "Sets", 
  description : "Accessing values in Sets, Working with Sets, Functions and Methods", 
  image : "assets/images/courses/pythoncourse/modules.svg", 
  imageAlt : ""
},
{ 
  name : "Input and Output", 
  description : "Output formatting, Files operations, Files Functions", 
  image : "assets/images/courses/pythoncourse/modules.svg", 
  imageAlt : ""
}
    
    ],
    projects:[
      { 
        name : "Web Scraping & Sentiment Analysis", 
        description : "Bored of watching same old award shows? Feel that the movie that won the award is actually not at all deserving? Feel that these award shows are paid? Well, why not make your own jury system. Analyse all the user reviews from different websites like IMDB, BookMyShow, Rotten Tomatoes etc. and find out the movie of the year. Not only this, apply the same thing and find the best cricket team, best player, best bowler, batsman etc. All these things in our python project of WebScraping & Sentiment Analysis.", 
        image : "assets/images/courses/pythoncourse/python-project-digital-lync.png", 
        imageAlt : "Python", 
    },
    {
      name: "A multipage functional website (python + django)",
      description:"Python along with django is used in this POC .Use case is developed by using the core functionality of django auth module and a simple blogging site is made.It involves both admin template and custom templated website.Login functionality with django forms is also involved in this process.",
      image: "assets/images/courses/pythoncourse/python-project-digital-lync.png",
      imageAlt:"Python",
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="python-course-training-hyderabad";
    this.page.slug="python-course-training-hyderabad";
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

