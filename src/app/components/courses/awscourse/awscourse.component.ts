import { Component, OnInit } from '@angular/core';
import { Props } from '../../../apex/common/props';

@Component({
  selector: 'app-awscourse',
  templateUrl: './awscourse.component.html',
  styleUrls: ['./awscourse.component.scss']
})
export class AwscourseComponent implements OnInit {
  imageHost=Props.IMAGE_HOST;
  constructor() { }

  ngOnInit() {
  }

}
