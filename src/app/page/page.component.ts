import { Component, OnInit } from '@angular/core';

const skills = require('./../../shared/skills.json')
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
    this.skills = skills;
  }
  onClick(tabIndex){
    console.log("The tab index will be::",tabIndex);
  }

}
