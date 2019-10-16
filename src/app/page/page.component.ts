import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'
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
        this.intializeMessageForm();
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


}
