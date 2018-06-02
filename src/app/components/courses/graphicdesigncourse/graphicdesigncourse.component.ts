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
  selector: 'app-graphicdesigncourse',
  templateUrl: './graphicdesigncourse.component.html',
  styleUrls: ['./graphicdesigncourse.component.scss']
})
export class GraphicdesigncourseComponent implements OnInit {
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
  courseName: any='Graphicdesgin ';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
    selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 Graphicdesgin  Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking Graphicdesgin  Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'Graphicdesgin  Training in Hyderabad | Graphicdesgin  Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Graphicdesgin  training in hyderabad, Graphicdesgin  course in hyderabad, Graphicdesgin  certification in Hyderabad, Graphicdesgin  training institute in Hyderabad, digital lync'});
  
    title.setTitle('Graphicdesgin  Training in Hyderabad | Graphicdesgin  Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="graphic-design-course-training-hyderabad";
    this.page.name="Graphicdesgin";
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
  }
  ];
courseData={ 
    name: "Graphicdesgin", 
    description : "Graphicdesgin Course", 
    courseType : "Both", 
    duration : "12 Weeks", 
    hours : 5, 
    why : "Visual design improves the user experience through considering the effects of illustrations, photography, typography, layouts, and color on the usability of products and appeal.", 
    whyImage : "why-learn--digital-lync.png", 
    whyImageAlt : "why learn Graphicdesgin ", 
    careerHead : "", 
    courseImage : "Graphicdesgin -digital-lync.png", 
    courseImageAlt : "Graphicdesgin ", 
    views :5750, 
    share : 123,  
    slug : "graphic-design-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/Fullstack.pdf",  
    careers : [
        "Graphic Designer",
        "Art Director",
        "Layout Artist",
        "Creative director"
    ], 
    pre : [
        "Passion for design Creative Thinking"
    ],
    subModules:[
      { 
        name : "Photoshop", 
        description : "Create and enhance photographs, illustrations and 3D artwork. Design websites and mobile apps.", 
        image : "assets/images/courses/graphicdesigncourse/photoshop-module-digital-lync.svg", 
        imageAlt : ""
    },
    { 
      name : "Illustrator", 
      description : "The industry-standard vector graphics app lets you create logos, icons, drawings, typography and illustrations for print, web, video and mobile.", 
      image : "assets/images/courses/graphicdesigncourse/illustrator-module-digital-lync.svg", 
      imageAlt : ""
    },
    { 
      name : "Indesign", 
      description : "The industry-leading page design and layout app lets you create, preflight and publish beautiful documents for print and digital media.", 
      image : "assets/images/courses/graphicdesigncourse/indesign-module-digital-lync.svg", 
      imageAlt : ""
    }

  ],
    projects:[
      { 
        name : "Corporate Booklet", 
        description : "Creating Corporate booklet based on the content provided . Using photoshop to resize and modify images that are required . Creating vector graphics for the booklet in illustrator if needed. Designing the layout of booklet using indesign and making it print ready .", 
        image : "assets/images/courses/graphicdesigncourse/graphic-design-project1-digital-lync.png", 
        imageAlt : "graphicdesigncourse", 
    },
    {
      name: "Creatives for Digital Media",
      description:"Designing creatives for digital media for different social media platforms like facebook , twitter, instagram based on the standard sizes of those platforms based on the content . Checking the text to image ratio and content alignment so that the creative looks more engaging and get more reach on the web .",
      image: "assets/images/courses/graphicdesigncourse/graphic-design-project2-digital-lync.png",
      imageAlt:"Graphicdesgin ",
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="graphic-design-course-training-hyderabad";
    this.page.slug="graphic-design-course-training-hyderabad";
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


