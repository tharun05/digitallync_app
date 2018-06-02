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
  selector: 'app-datasciencecourse',
  templateUrl: './datasciencecourse.component.html',
  styleUrls: ['./datasciencecourse.component.scss']
})
export class DatasciencecourseComponent implements OnInit {
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
  courseName: any='Data Science';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
    selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 Data Science Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking Data Science Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'Data Science Training in Hyderabad | Data Science Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Data Science training in hyderabad, Data Science course in hyderabad, Data Science certification in Hyderabad, Data Science training institute in Hyderabad, digital lync'});
  
    title.setTitle('Data Science Training in Hyderabad | Data Science Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="data-science-course-training-hyderabad";
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
  }
  ];
courseData={ 
    name: "Data Science", 
    description : "Data Science Course", 
    courseType : "Both", 
    duration : "13 Weeks", 
    hours : 5, 
    why : "Data Science has a huge impact in the field of industries and is likely to cover one third of its IT global market. All the organisations small or big are wrangling for employees with knowledge of synthesize data to obtain, explore, model and interpret.", 
    whyImage : "why-learn--digital-lync.png", 
    whyImageAlt : "why learn Data Science", 
    careerHead : "", 
    courseImage : "Data Science-digital-lync.png", 
    courseImageAlt : "Data Science", 
    views :5750, 
    share : 123,  
    slug : "Data Science-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/Bigdata.pdf",  
    careers : [
        "Data Scientist",
        "Data Architect",
        "Data Analyst"
    ], 
    pre : [
        "Logical reasoning Analytical abilities"
    ],
    subModules:[
      { 
        name : "Essentials of Python", 
        description : "Python Basics & Visualization, Numpy Library, Scikit Learn", 
        image : "assets/images/courses/datasciencecourse/modules.svg", 
        imageAlt : ""
    },
    { 
      name : "Understanding data through statistics", 
      description : "Measure of Central Dispersion, Hypothesis Testing, Distributions", 
      image : "assets/images/courses/datasciencecourse/modules.svg", 
      imageAlt : ""
    },
    { 
      name : "Predictive Analytics", 
      description : "Linear Regression, Logistic Regression", 
      image : "assets/images/courses/datasciencecourse/modules.svg", 
      imageAlt : ""
  },
  { 
    name : "Forecasting Analytics",  
    description : "Exponential Smoothing, ARIMA Models", 
    image : "assets/images/courses/datasciencecourse/modules.svg", 
    imageAlt : ""
},{  
  name : "Machine Learning", 
  description : "Supervised Learning, Unsupervised Learning, Reinforcement Learning", 
  image : "assets/images/courses/datasciencecourse/modules.svg", 
  imageAlt : ""
},{ 
  name : "Deep Learning", 
  description : "Neural Networks, TensorFlow Framework", 
  image : "assets/images/courses/datasciencecourse/modules.svg", 
  imageAlt : ""
}
  ],
    projects:[
      { 
        name : "Facial Recognition", 
        description : "How about an app which recognises you and marks your attendance based upon recognising the faces? No need for that old punch and come method. Just show your face and that's enough. Your company recognises each and every employee by face, what else do we want? Work on this cool project with us by applying advanced concepts of Deep Learning and Computer Vision.", 
        image : "assets/images/courses/datasciencecourse/face-recognition-project-digital-lync.jpg", 
        imageAlt : "datasciencecourse", 
    },
    {
      name: "Object Detection",
      description:"Is traffic giving you nuisance? Are you really getting late for your office, or your date? Well, the best solution is to provide one, than to expect one. Use Deep Learning and OpenCV to tackle this biggest problem. Learn object detection algorithms and their applications.",
      image: "assets/images/courses/datasciencecourse/object-detection-project-digital-lync.jpg",
      imageAlt:"Data Science",
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="data-science-course-training-hyderabad";
    this.page.slug="data-science-course-training-hyderabad";
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


