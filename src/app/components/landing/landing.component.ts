import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private meta: Meta,private title: Title) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Digital Lync is one the best training institute for IT Software, Digital Marketing, HooDoop Big Data, Machine Learning, Data Analysis, Python, DevOps and many More!'});
      this.meta.updateTag(
        {name: 'Title', content: 'Best Software & Digital Marketing Training Institute in Hyderabad – Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Best software training institute in Hyderabad, digital marketing training institute in Hyderabad, Data science training in Hyderabad, big data training in Hyderabad, Deep Learning Training in Hyderabad, Data Analysis Training in Hyderabad, Amazon AWS Training in Hyderabad, Digital Lync'});
    title.setTitle('Best Software & Digital Marketing Training Institute in Hyderabad – Digital Lync');
  }

  ngOnInit() {
  }

}
