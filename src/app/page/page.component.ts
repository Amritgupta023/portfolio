import { Component, OnInit } from '@angular/core';

// const skills = require('./../../shared/skills.json')
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  skills:any;
  project_tab_index=1;
  constructor() { }

  ngOnInit() {
    this.skills = [
      {
          "index": 0,
          "subject": "NodeJs",
          "percentage": "70%"
      },
      {
          "index": 1,
          "subject": "JavaScript",
          "percentage": "70%"
      },
      {
          "index": 2,
          "subject": "Angular",
          "percentage": "70%"
      },
      {
          "index": 3,
          "subject": "MongoDb",
          "percentage": "70%"
      },
      {
          "index": 4,
          "subject": "Topic",
          "percentage": "70%"
      },
      {
          "index": 5,
          "subject": "Angular",
          "percentage": "70%"
      },
      {
          "index": 6,
          "subject": "MongoDb",
          "percentage": "70%"
      },
      {
          "index": 7,
          "subject": "Topic",
          "percentage": "70%"
      }
  ];
  }
  onClick(tabIndex){
    console.log("The tab index will be::",tabIndex);
  }

}
