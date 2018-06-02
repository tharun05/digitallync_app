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
  selector: 'app-dataanalysiscourse',
  templateUrl: './dataanalysiscourse.component.html',
  styleUrls: ['./dataanalysiscourse.component.scss']
})
export class DataanalysiscourseComponent implements OnInit {
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
  courseName: any='Data Analysis';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
    selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 Data Analysis Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking Data Analysis Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'Data Analysis Training in Hyderabad | Data Analysis Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Data Analysis training in hyderabad, Data Analysis course in hyderabad, Data Analysis certification in Hyderabad, Data Analysis training institute in Hyderabad, digital lync'});
  
    title.setTitle('Data Analysis Training in Hyderabad | Data Analysis Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="data-analysis-course-training-hyderabad";
    this.page.name="Dataanalysis";
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
  }
  ];
courseData={ 
    name: "Data Analysis", 
    description : "Data Analysis Course", 
    courseType : "Both", 
    duration : "8 Weeks", 
    hours : 5, 
    why : "Data Analysis is needed in Business to Consumer applications (B2C). Organisations collect data that they have gathered from customers, businesses, economy and practical experience.", 
    whyImage : "why-learn--digital-lync.png", 
    whyImageAlt : "why learn Data Analysis", 
    careerHead : "", 
    courseImage : "Data Analysis-digital-lync.png", 
    courseImageAlt : "Data Analysis", 
    views :5750, 
    share : 123,  
    slug : "data-analysis-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/Fullstack.pdf",  
    careers : [
        "Tableau Consultant",
        "Data Analyst",
        "Business Intelligence Analyst",
        "Business Intelligence Developer"
    ], 
    pre : [
        "Familiar with loop concepts Knowledge on modules, objects and classes"
    ],
    subModules:[
      { 
        name : "Basics Excel", 
        description : "Overview, Functions, Validations", 
        image : "assets/images/courses/dataanalysiscourse/modules.svg", 
        imageAlt : ""
    },
    { 
      name : "Advanced Excel", 
      description : "Sorting/Filtering, Pivot Tables, Reports/Dashboards, Goal Seek, Scenario Manager", 
      image : "assets/images/courses/dataanalysiscourse/modules.svg", 
      imageAlt : ""
    },
    { 
      name : "Tableau", 
      description : "Data Connections, Mapping, Dashboards", 
      image : "assets/images/courses/dataanalysiscourse/modules.svg", 
      imageAlt : ""
  },
  { 
    name : "SQL Server", 
    description : "TSQL, DML, DQL, Operations, Transactions, XMLs", 
    image : "assets/images/courses/dataanalysiscourse/modules.svg", 
    imageAlt : ""
}
  ],
    projects:[
      { 
        name : "Cricket Players Statistical Performance Dashboard using ESPN-CRICINFO", 
        description : "You have seen the cricket dashboards at ESPNCricinfo. They are so immersive. How about making our own dashboard using Excel and Tableau? We can add our own elements. We can make it more interactive, look more cool, and add multiple use cases. Welcome to our Data Analysis course. Let’s make this Dashboard a reality.", 
        image : "assets/images/courses/dataanalysiscourse/cricket-project-digital-lync.jpg", 
        imageAlt : "dataanalysiscourse", 
    },
    {
      name: "Institute Management System",
      description:"How about visualising the current trends in technology job market? Which job is trending? Which course is trending? Career growth path? Learning Path? etc. All these things in one single dashboard. A dashboard which makes you learn and earn!!",
      image: "assets/images/courses/dataanalysiscourse/institute-management.jpg",
      imageAlt:"Data Analysis",
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="data-analysis-course-training-hyderabad";
    this.page.slug="data-analysis-course-training-hyderabad";
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


