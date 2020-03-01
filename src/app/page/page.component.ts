import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Router } from '@angular/router';
// const skills = require('./../../shared/skills.json')
@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    skills: any;
    project_tab_index = 1;
    messageForm: FormGroup;
    menu = 'about';
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];



    constructor(private router:Router) { }

    ngOnInit() {
        this.skills = [
            {
                "index": 0,
                "subject": "HTML5",
                "percentage": "80%"
            },
            {
                "index": 1,
                "subject": "CSS3",
                "percentage": "80%"
            },
            {
                "index": 2,
                "subject": "JavaScript",
                "percentage": "75%"
            },
            {
                "index": 3,
                "subject": "Angular",
                "percentage": "75%"
            },
            {
                "index": 4,
                "subject": "ReactJs",
                "percentage": "70%"
            },
            {
                "index": 5,
                "subject": "NodeJs",
                "percentage": "80%"
            },
            {
                "index": 6,
                "subject": "MongoDB",
                "percentage": "70%"
            },
        ];
        this.intializeMessageForm();
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
    }

    intializeMessageForm() {
        this.messageForm = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            message: new FormControl(null, [Validators.required])
        })
    }
    onClick(tabIndex) {
        console.log("The tab index will be::", tabIndex);
    }

    onSubmit() {
        console.log("The submit btn click", this.messageForm.value);
        let obj = {
            dest: 'guptaamrit04@gmail.com',
            name: this.messageForm.value.name || 'unknown',
            from: this.messageForm.value.email || 'unknown',
            mailBody: this.messageForm.value.message || 'unknown'
        }
        axios.post(environment.messageAPI, obj).then((res) => {
            console.log("Teh ressponse will be:::", res);
            if (res.status == 200) {
                Swal.fire(
                    'Success',
                    res.data.message,
                    'success'
                ).then((res) => {
                    this.messageForm.reset();
                });
            }
        }, error => {
            console.log("Error in sending message");
        })
    }

    onClickNavMenu(menu, $element) {
        this.menu = menu
        if ($element) $element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    onClickViewMyWork($element) {
        if ($element) $element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    onClickProject(project){
        console.log("project",project);
        this.router.navigate(['project-view']).then((res)=>{
            console.log("res");
        })
    }


}
