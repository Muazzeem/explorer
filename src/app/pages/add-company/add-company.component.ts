import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'ngx-add-company',
    templateUrl: './add-company.component.html',
    styleUrls: ['./add-company.component.scss'],
})
export class AddCompanyComponent implements OnInit {
    firstForm: FormGroup;
    secondForm: FormGroup;
    thirdForm: FormGroup;
    constructor(private fb: FormBuilder) {
    }
    ngOnInit() {
    }
}
