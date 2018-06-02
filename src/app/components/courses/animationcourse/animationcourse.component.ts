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
  selector: 'app-animationcourse',
  templateUrl: './animationcourse.component.html',
  styleUrls: ['./animationcourse.component.scss']
})
export class AnimationcourseComponent implements OnInit {
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
  courseName: any='Animation';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
    selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 Animation Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking Animation Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'Animation Training in Hyderabad | Animation Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Animation training in hyderabad, Animation course in hyderabad, Animation certification in Hyderabad, Animation training institute in Hyderabad, digital lync'});
  
    title.setTitle('Animation Training in Hyderabad | Animation Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="artificial-intelligence-course-training-hyderabad";
    this.page.name="Animation";
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
  }
  ];
courseData={ 
    name: "Animation", 
    description : "Animation Course", 
    courseType : "Both", 
    duration : "14 Weeks", 
    hours : 5, 
    why : "Do you remember when animation first captured your imagination? From the velociraptors in “Jurassic Park” to the candlelit ballroom in “Beauty and the Beast , From the weightless space of “Gravity,” to the Oscar-winning world of “Zootopia”? 3D animation and visual effects are the not-so-secret ingredient in contemporary storytelling, from Hollywood blockbusters to independent film and even outside of the entertainment industry, and you want to be a part of the magic.", 
    whyImage : "why-learn--digital-lync.png", 
    whyImageAlt : "why learn Animation", 
    careerHead : "", 
    courseImage : "Animation-digital-lync.png", 
    courseImageAlt : "Animation", 
    views :5750, 
    share : 123,  
    slug : "artificial-intelligence-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/.pdf",  
    careers : [
        "Good at fine art",
        "Creative Mind"
    ], 
    pre : [
        "Good at fine art Creative Mind"
    ],
    subModules:[
      { 
        name : "Photoshop", 
        description : "Create and enhance photographs, illustrations and 3D artwork. Design websites and mobile apps.", 
        image : "assets/images/courses/animationcourse/photoshop-module-digital-lync.png", 
        imageAlt : ""
    },
    { 
      name : "Maya", 
      description : "Maya 3D animation, modelling, simulation and rendering software provides an integrated, powerful toolset.", 
      image : "assets/images/courses/animationcourse/maya-module-digital-lync.png", 
      imageAlt : ""
    },
    { 
      name : "3D'S Max", 
      description : "3ds Max is a powerful 3D modeling and animation, create massive worlds, stunning scenes, and engaging virtual reality (VR) experiences.", 
      image : "assets/images/courses/animationcourse/3d-max-module-digital-lync.svg", 
      imageAlt : ""
  }
  ],
    projects:[
    {
      name: "Creating a 3D Demo",
      description:"Come up with a concept for a short video. Create a script/ storyboard for the same. Use Maya to build characters and environments, then texture them using adobe photoshop. Later build controls for your characters and animate them according to your concept. Light your scene and render images. Then finally compose them and final render the sequence.",
      image: "assets/images/courses/animationcourse/3d-animation-project-digital-lync.png",
      imageAlt:"",
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="animation-course-training-hyderabad";
    this.page.slug="animation-course-training-hyderabad";
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


