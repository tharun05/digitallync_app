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
  selector: 'app-bigdatacourse',
  templateUrl: './bigdatacourse.component.html',
  styleUrls: ['./bigdatacourse.component.scss']
})
export class BigdatacourseComponent implements OnInit {
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
  courseName: any='Big Data';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
    selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 Big Data Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking Big Data Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'Big Data Training in Hyderabad | Big Data Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Big Data training in hyderabad, Big Data course in hyderabad, Big Data certification in Hyderabad, Big Data training institute in Hyderabad, digital lync'});
  
    title.setTitle('Big Data Training in Hyderabad | Big Data Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="big-data-course-training-hyderabad";
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
  }
  ];
courseData={ 
    name: "Big Data", 
    description : "Big Data Course", 
    courseType : "Both", 
    duration : "13 Weeks", 
    hours : 5, 
    why : "Big Data is rapidly transforming the way we work and live. It’s a great fusion of in-depth theoretical knowledge with strong practical skills by implementing web-server logs.", 
    whyImage : "why-learn-Big Data-digital-lync.png", 
    whyImageAlt : "why learn Big Data", 
    careerHead : "", 
    courseImage : "Big Data-digital-lync.png", 
    courseImageAlt : "Big Data", 
    views :5750, 
    share : 123,  
    slug : "Big Data-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/Bigdata.pdf",  
    careers : [
        "Big Data  Engineer",
        "Big Data Analyst"
    ], 
    pre : [
        "Analytical abilities Creative skills"
    ],
    subModules:[
      { 
        name : "Hadoop", 
        description : "HDFS, YARN, Map-Reduce", 
        image : "assets/images/courses/bigdatacourse/modules.svg", 
        imageAlt : ""
    },
    { 
      name : "PIG", 
      description : "PIG Latin, PIG UDF, PIGGY Bank", 
      image : "assets/images/courses/bigdatacourse/modules.svg", 
      imageAlt : ""
    },
    { 
      name : "HIVE", 
      description : "HIVE QL", 
      image : "assets/images/courses/bigdatacourse/modules.svg", 
      imageAlt : ""
  },
  { 
    name : "spark",  
    description : "Scala, GraphX, MLib, Straming", 
    image : "assets/images/courses/bigdatacourse/modules.svg", 
    imageAlt : ""
},{  
  name : "Hbase", 
  description : "Architecture, Data Models, Commands", 
  image : "assets/images/courses/bigdatacourse/modules.svg", 
  imageAlt : ""
},{ 
  name : "Oozie & Zookeeper", 
  description : "Data Model, Coordination, Service", 
  image : "assets/images/courses/bigdatacourse/modules.svg", 
  imageAlt : ""
},{ 
  name : "sqoop", 
  description : "Coomands, Table, Execution", 
  image : "assets/images/courses/bigdatacourse/modules.svg", 
  imageAlt : ""
},
{ 
  name : "Flume", 
  description : "Architecture, Components", 
  image : "assets/images/courses/bigdatacourse/modules.svg", 
  imageAlt : ""
}
    
    ],
    projects:[
      { 
        name : "Facial Recognition", 
        description : "Using deep learning to recognise faces is one thing. But, what if your company has more than 50 thousand employees? In that case working using normal server systems will not help. So, why not use distributed systems, incorporate BIG DATA clusters on them and apply the same computer vision and deep learning concepts using SPARK, HADOOP, CASSANDRA and other stacks? Won't it be cool to merge two technologies? It is cool, and let's work together to make this unique model!", 
        image : "assets/images/courses/bigdatacourse/face-recognition-project-digital-lync.jpg", 
        imageAlt : "bigdatacourse", 
    },
    {
      name: "E-commerce",
      description:"Flipkart, Amazon, Alibaba, all these websites look so cool from the front, but ever wondered about what happens in the background? Well, don't wonder! Using Big Data Structure we will show you how to make the complete background infrastructure. Gone are the days when we used SQLs. It's time for NOSQLs and that too inside the Big Data Ecosystem. Apply HADOOP HDFS, Spark, HBASE, SQOOP, etc and make the complete infrastructure.",
      image: "assets/images/courses/bigdatacourse/ecommerce-project-digital-lync.png",
      imageAlt:"Big Data",
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="Big Data-course-training-hyderabad";
    this.page.slug="Big Data-course-training-hyderabad";
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

