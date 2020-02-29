import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private router:Router) { }

  ngOnInit() {
  this.galleryImages = [
      {
          small: 'assets/image/hsbc-01-login.png',
          medium: 'assets/image/hsbc-01-login.png',
          big: 'assets/image/hsbc-01-login.png'
      },
      {
          small: 'assets/image/hsbc-02-dashboard-01.png',
          medium: 'assets/image/hsbc-02-dashboard-01.png',
          big: 'assets/image/hsbc-02-dashboard-01.png'
      },
      {
          small: 'assets/image/hsbc-03-user-list.png',
          medium: 'assets/image/hsbc-03-user-list.png',
          big: 'assets/image/hsbc-03-user-list.png'
      },
      {
          small: 'assets/image/hsbc-04-customer-list.png',
          medium: 'assets/image/hsbc-04-customer-list.png',
          big: 'assets/image/hsbc-04-customer-list.png'
      },
      {
          small: 'assets/image/hsbc-04-new-user-reg.png',
          medium: 'assets/image/hsbc-04-new-user-reg.png',
          big: 'assets/image/hsbc-04-new-user-reg.png'
      },
      {
          small: 'assets/image/hsbc-05-customer-filter.png',
          medium: 'assets/image/hsbc-05-customer-filter.png',
          big: 'assets/image/hsbc-05-customer-filter.png'
      },
      {
          small: 'assets/image/hsbc-06-integritiy-listing.png',
          medium: 'assets/image/hsbc-06-integritiy-listing.png',
          big: 'assets/image/hsbc-06-integritiy-listing.png'
      },
      {
          small: 'assets/image/hsbc-07-summery-count.png',
          medium: 'assets/image/hsbc-07-summery-count.png',
          big: 'assets/image/hsbc-07-summery-count.png'
      },
      {
          small: 'assets/image/hsbc-08-customer-voice.png',
          medium: 'assets/image/hsbc-08-customer-voice.png',
          big: 'assets/image/hsbc-08-customer-voice.png'
      },
      {
          small: 'assets/image/hsbc-09-market-intelligence.png',
          medium: 'assets/image/hsbc-09-market-intelligence.png',
          big: 'assets/image/hsbc-09-market-intelligence.png'
      },
      {
          small: 'assets/image/hsbc-09-project-archive.png',
          medium: 'assets/image/hsbc-09-project-archive.png',
          big: 'assets/image/hsbc-09-project-archive.png'
      }, {
          small: 'assets/image/hsbc-10-activity-feed.png',
          medium: 'assets/image/hsbc-10-activity-feed.png',
          big: 'assets/image/hsbc-10-activity-feed.png'
      }, {
          small: 'assets/image/hsbc-11-knowledge-base.png',
          medium: 'assets/image/hsbc-11-knowledge-base.png',
          big: 'assets/image/hsbc-11-knowledge-base.png'
      }, {
          small: 'assets/image/hsbc-12-login-history.png',
          medium: 'assets/image/hsbc-12-login-history.png',
          big: 'assets/image/hsbc-12-login-history.png'
      }


  ];
  this.galleryOptions = [
    {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
    },
    // max-width 800
    {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
    },
    // max-width 400
    {
        breakpoint: 400,
        preview: false
    }
];  

  }

  onClickBackBtn(){
    this.router.navigate(['/']);
}

}
