import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../environments/environment';
import {DemoFilePickerAdapter} from './upload';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FilePickerComponent, FilePreviewModel, ValidationError} from 'ngx-awesome-uploader';

@Component({
    selector: 'ngx-cv-uploader',
    templateUrl: './cv-uploader.component.html',
    styleUrls: ['./cv-uploader.component.scss'],
})
export class CvUploaderComponent implements OnInit {
    public adapter = new DemoFilePickerAdapter(this.http);
    public errorMessage: string;
    public successMessage: string;
    @ViewChild('uploader', {static: true}) uploader: FilePickerComponent;
    public myFiles: FilePreviewModel[] = [];

    constructor(public http: HttpClient) {
    }

    ngOnInit(): void {
        this.errorMessage = '';
        this.successMessage = '';
    }

    public onValidationError(er: ValidationError): void {
        console.warn('validationError', er);
        console.warn('Error', 'File Validation');
        this.errorMessage = er.error;
    }

    public onUploadSuccess(res: FilePreviewModel): void {
        console.warn('File upload successful', res.fileName);
    }

    public onUploadFail(er: HttpErrorResponse): void {
        console.warn('Fail', 'Try Again');
    }

    public onRemoveSuccess(res: FilePreviewModel): void {
    }

    public onFileAdded(file: FilePreviewModel): void {
        this.myFiles.push(file);
    }

    public onFileRemoved(file: FilePreviewModel): void {
    }

    public removeFile(): void {
        this.uploader.removeFileFromList(this.myFiles[0]);
    }
}
