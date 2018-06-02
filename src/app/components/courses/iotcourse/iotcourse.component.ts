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
  selector: 'app-iotcourse',
  templateUrl: './iotcourse.component.html',
  styleUrls: ['./iotcourse.component.scss']
})
export class IotcourseComponent implements OnInit {
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
  courseName: any='Iot ';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
    selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 Iot  Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking Iot  Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'Iot  Training in Hyderabad | Iot  Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Iot  training in hyderabad, Iot  course in hyderabad, Iot  certification in Hyderabad, Iot  training institute in Hyderabad, digital lync'});
  
    title.setTitle('Iot  Training in Hyderabad | Iot  Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="iot-course-training-hyderabad";
    this.page.name="Iot";
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
  }
  ];
courseData={ 
    name: "IoT ", 
    description : "IoT  Course", 
    courseType : "Both", 
    duration : "9 Weeks", 
    hours : 5, 
    why : "IoT presents the opportunity for all of us to no longer work off assumptions, but to work off, what is the data revealing , which will make decision making in our daily life much easier.", 
    whyImage : "why-learn--digital-lync.png", 
    whyImageAlt : "why learn Iot ", 
    careerHead : "", 
    courseImage : "IoT -digital-lync.png", 
    courseImageAlt : "Iot ", 
    views :5750, 
    share : 123,  
    slug : "iot-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/Fullstack.pdf",  
    careers : [
        "IOT Engineer",
        "IOT Developer",
        "IOT Architect"
    ], 
    pre : [
        "C , C++ , Python as programming language Basic understanding of Electronics"
    ],
    subModules:[
      { 
        name : "Introduction to IoT", 
        description : "Introduction to IoT-Concepts and Terminology of the Internet of Things (IoT)", 
        image : "assets/images/courses/iotcourse/modules.svg", 
        imageAlt : ""
    },
    { 
      name : "Electronics and Signal for IoT", 
      description : "Electrical Signals,Basics of Digital Electronics", 
      image : "assets/images/courses/iotcourse/modules.svg", 
      imageAlt : ""
    },
    { 
      name : "Sensors and Actuators", 
      description : "Types of Sensors,MEMS,Hands- on with basic Sensors and many more", 
      image : "assets/images/courses/iotcourse/modules.svg", 
      imageAlt : ""
  },
  { 
    name : "Communication Protocols", 
    description : "Type of Communication Protocols,Application issues with RF Protocol", 
    image : "assets/images/courses/iotcourse/modules.svg", 
    imageAlt : ""
},
{ 
  name : "IoT World", 
  description : "Overview of IoT Platforms,IoT Market", 
  image : "assets/images/courses/iotcourse/modules.svg", 
  imageAlt : ""
},
{ 
  name : "Architecture and Tech Stack Overview", 
  description : "IoT Architecture standard,Basics of Networking", 
  image : "assets/images/courses/iotcourse/modules.svg", 
  imageAlt : ""
},
{ 
  name : "Cloud Concepts", 
  description : "Introduction to Cloud Theory,Big data Analytics,Overview of IoT Platforms", 
  image : "assets/images/courses/iotcourse/modules.svg", 
  imageAlt : ""
},
{
  name:"Challenges and Security in IoT",
  description:"Security Requirements,Network Security,Hardware Security",
  image:"assets/images/courses/iotcourse/modules.svg", 
  imageAlt : ""
},
{
  name:"iBot XT",
  description:"Introduction to XT,XT Hardware architecture",
  image:"assets/images/courses/iotcourse/modules.svg", 
  imageAlt : ""
},
{
  name:"Programming iBot XT",
  description:"Peripherals Programming (UART,RS 232, RS 485,GPIO,ADC,SPI,etc),Debugging Techniques",
  image:"assets/images/courses/iotcourse/modules.svg", 
  imageAlt : ""
},
{
  name:"iBot XT Implementations",
  description:"iBot’s Weather Station,Data Visualisation",
  image:"assets/images/courses/iotcourse/modules.svg", 
  imageAlt : ""
},
{
  name:"Case Studies and PoC",
  description:"Long range vehicle Detection and Identification,Employee/ Student Tracking Systems",
  image:"assets/images/courses/iotcourse/modules.svg", 
  imageAlt : ""
}

  ],
    projects:[
      { 
        name : "Boom Barrier", 
        description : "Boom barriers are used to control the movement of vehicles in and out of places like business parks, residential buildings, shopping malls, etc. They consist of a pole that blocks vehicles. The purpose of these gates is to stop the entry of vehicles to collect information of the visitor or to check the vehicle before it is let in. At toll booths, this gate is used to restrict the vehicle from driving on before paying the toll fee.", 
        image : "assets/images/courses/iotcourse/iot-project1-digital-lync.jpg", 
        imageAlt : "iotcourse", 
    },
    {
      name: "Integrated UHF card reader",
      description:"Applications of Smart Cards include student and employee ID’s, highway toll payment, building access management and security, as well as public transportation fee payments. Still, these are only a few of the many potential uses!",
      image: "assets/images/courses/iotcourse/iot-project2-digital-lync.jpg",
      imageAlt:"Iot ",
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="iot-course-training-hyderabad";
    this.page.slug="iot-course-training-hyderabad";
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


