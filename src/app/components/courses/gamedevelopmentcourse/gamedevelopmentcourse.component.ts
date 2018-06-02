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
  selector: 'app-gamedevelopmentcourse',
  templateUrl: './gamedevelopmentcourse.component.html',
  styleUrls: ['./gamedevelopmentcourse.component.scss']
})
export class GamedevelopmentcourseComponent implements OnInit {
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
  courseName: any='Game development';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
    selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 Game development Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking Game development Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'Game development Training in Hyderabad | Game development Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Game development training in hyderabad, Game development course in hyderabad, Game development certification in Hyderabad, Game development training institute in Hyderabad, digital lync'});
  
    title.setTitle('Game development Training in Hyderabad | Game development Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="game-development-course-training-hyderabad";
    this.page.name="Game development";
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
  }
  ];
courseData={ 
    name: "Game development", 
    description : "Game development Course", 
    courseType : "Both", 
    duration : "24 Weeks", 
    hours : 5, 
    why : "The game development industry may be considered a playground for creative minds, as it requires consistent innovation and original, interesting content.", 
    whyImage : "why-learn--digital-lync.png", 
    whyImageAlt : "why learn Game development", 
    careerHead : "", 
    courseImage : "Game development-digital-lync.png", 
    courseImageAlt : "Game development", 
    views :5750, 
    share : 123,  
    slug : "game-development-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/Game development.pdf",  
    careers : [
        "Unity3D Developer",
        "VR/AR Developer",
        "UI/UX designer for virtual reality"
    ], 
    pre : [
        "Basic Programming Good knowledge on Maths & Physics"
    ],
    subModules:[
      { 
        name : "Unity3D", 
        description : "Unity 3D is a game creation system that comes with an integrated development environment for engineering 2D & 3D games", 
        image : "assets/images/courses/gamedevelopmentcourse/unity-module-digital-lync.svg", 
        imageAlt : ""
    },
    { 
      name : "VR", 
      description : "Virtual Reality (VR) is a computer-generated scenario that simulates a realistic experience.", 
      image : "assets/images/courses/gamedevelopmentcourse/vr-module-digital-lync.svg", 
      imageAlt : ""
    },
    { 
      name : "AR", 
      description : "Augmented Reality (AR) is a direct or indirect live view of a physical, real-world environment", 
      image : "assets/images/courses/gamedevelopmentcourse/ar-module-digital-lync.svg", 
      imageAlt : ""
  }
  ],
    projects:[
      { 
        name : "Zombie Shooter VR", 
        description : "The objective of the project is to create a third person shooter game that enables VR. The player has to kill the enemies and survive from the huge wave of enemies. The player can get the experience of playing a game in Virtual Reality.Topics Covered in the project:Player controller,UI manager,Scene Management,Level Designing,Enabling VR into unity", 
        image : "assets/images/courses/gamedevelopmentcourse/game-over-project-digital-lync.jpg", 
        imageAlt : "gamedevelopmentcourse", 
    },
    {
      name: "Barbarian AR",
      description:"The objective of the project is to create an AR application which consists of a 3D character with various animations. The player can simulate the 3D character into real world and can select different actions to be played by the character. The player can get the experience of playing a game in Augmented Reality.Topics Covered in this project:Importing 3D assets ,Animator Controller,UI manager,Scene management,Using Vuforia in unity,Enabling AR in unity",
      image: "assets/images/courses/gamedevelopmentcourse/barberian-project-digital-lync.jpg",
      imageAlt:"Game development",
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="game-development-course-training-hyderabad";
    this.page.slug="game-development-course-training-hyderabad";
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


