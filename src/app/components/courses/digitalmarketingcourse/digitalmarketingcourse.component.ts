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
  selector: 'app-digitalmarketingcourse',
  templateUrl: './digitalmarketingcourse.component.html',
  styleUrls: ['./digitalmarketingcourse.component.scss']
})
export class DigitalmarketingcourseComponent implements OnInit {
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
  courseName: any='Digital Marketing';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
    selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 Digital Marketing Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking Digital Marketing Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'Digital Marketing Training in Hyderabad | Digital Marketing Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Digital Marketing training in hyderabad, Digital Marketing course in hyderabad, Digital Marketing certification in Hyderabad, Digital Marketing training institute in Hyderabad, digital lync'});
  
    title.setTitle('Digital Marketing Training in Hyderabad | Digital Marketing Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="digital-marketing-course-training-hyderabad";
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
  }
  ];
courseData={ 
    name: "Digital Marketing", 
    description : "Digital Marketing Course", 
    courseType : "Both", 
    duration : "8 Weeks", 
    hours : 5, 
    why : "Fuels your Creativity. Be part of Digital Revolution. Challenging. It's a very Dynamic Domain. And of course! You get paid awesome.", 
    whyImage : "why-learn-Digital Marketing-digital-lync.png", 
    whyImageAlt : "why learn Digital Marketing", 
    careerHead : "", 
    courseImage : "Digital Marketing-digital-lync.png", 
    courseImageAlt : "Digital Marketing", 
    views :5750, 
    share : 123,  
    slug : "Digital Marketing-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/.pdf",  
    careers : [
        "Search Engine Marketers",
        "SEO Executives",
        "Social Media Marketing Specialists",
        "Search Analysts/Associates",
        "& More!",
    ], 
    pre : [
        "Enthusiasm to learn and explore No Specific Requirements"
      
    ],
    subModules:[
      { 
        name : "What’s Digital Marketing", 
        description : "", 
        image : "assets/images/courses/digitalmarketingcourse/digital-marketing-module1-digital-lync.svg", 
        imageAlt : ""
    },
    { 
      name : "Search Engine Opimization (SEO)", 
      description : "", 
      image : "assets/images/courses/digitalmarketingcourse/digital-marketing-module1-digital-lync.svg", 
      imageAlt : ""
    },
    { 
      name : "Google AdWords", 
      description : "", 
      image : "assets/images/courses/digitalmarketingcourse/digital-marketing-module1-digital-lync.svg", 
      imageAlt : ""
  },
  { 
    name : "Social Media Marketing",  
    description : "", 
    image : "assets/images/courses/digitalmarketingcourse/digital-marketing-module1-digital-lync.svg", 
    imageAlt : ""
},{  
  name : "Web Analytics", 
  description : "", 
  image : "assets/images/courses/digitalmarketingcourse/digital-marketing-module1-digital-lync.svg", 
  imageAlt : ""
},{ 
  name : "Content Writing & Marketing", 
  description : "", 
  image : "assets/images/courses/digitalmarketingcourse/digital-marketing-module1-digital-lync.svg", 
  imageAlt : ""
},
{ 
  name : "Advanced Reporting Tools", 
  description : "", 
  image : "assets/images/courses/digitalmarketingcourse/digital-marketing-module1-digital-lync.svg", 
  imageAlt : ""
},
{ 
  name : "Mobile & Affiliate Marketing", 
  description : "", 
  image : "assets/images/courses/digitalmarketingcourse/digital-marketing-module1-digital-lync.svg", 
  imageAlt : ""
},{ 
  name : "Future of Digital Marketing", 
  description : "", 
  image : "assets/images/courses/digitalmarketingcourse/digital-marketing-module1-digital-lync.svg", 
  imageAlt : ""
}
    
    ],
    projects:[
      { 
        name : "SEO Project", 
        description : "Creation of Website, Competitor Analysis, On-page Optimization Strategies, Off-page Optimization Strategies, Reporting", 
        image : "assets/images/courses/digitalmarketingcourse/sales-dashboard-project-digital-lync.jpg", 
        imageAlt : "digitalmarketing", 
    },
    {
      name: "AdWords Project",
      description:"Creation of AdWords Account, Integrating AdWords account with your Website, Campaigns, Ad Groups, Keywords, Ads Setup, Building & Executing Optimization Strategies, Reporting",
      image: "assets/images/courses/digitalmarketingcourse/salesprediction.jpg",
      imageAlt:"digitalmarketing",
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="digitalmarketing-course-training-hyderabad";
    this.page.slug="digitalmarketing-course-training-hyderabad";
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

