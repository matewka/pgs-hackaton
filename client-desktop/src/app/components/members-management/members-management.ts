import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'members-management',
    providers: [],
    pipes: [],
    templateUrl: 'app/components/members-management/members-management.html',
    styleUrls: ['app/components/members-management/members-management.scss']
})

export class MembersManagement implements OnInit{
    members: any;

    constructor() {
    }

    ngOnInit(){
        this.getList();
    }

    getList(){
        this.members = [
            {
                "name": "Ivan Disapierd",
                "email": "mosssampson@gracker.com",
                "phone": "+1 (834) 524-2682",
                "consent": false,
                "status": "not accepted",
                "registered": "2014-10-28T12:39:38 -01:00",
                "technologies": [
                    "Javascript",
                    "PHP"
                ]
            },
            {
                "name": "Crisitna Pitolina",
                "email": "deliawooten@gracker.com",
                "phone": "+1 (923) 578-2242",
                "consent": true,
                "status": "not accepted",
                "registered": "2015-10-13T04:18:54 -02:00",
                "technologies": [
                    "Javascript",
                    "PHP"
                ]
            }
        ]
    }
}
