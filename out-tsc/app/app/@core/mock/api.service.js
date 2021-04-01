import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    formatErrors(error) {
        return throwError(error.error);
    }
    get(path, params = new HttpParams()) {
        return this.http.get(`${environment.baseUrl}${path}`, { params })
            .pipe(catchError(this.formatErrors));
    }
    put(path, body = {}) {
        return this.http.put(`${environment.baseUrl}${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
    }
    post(path, body = {}) {
        return this.http.post(`${environment.baseUrl}${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
    }
    delete(path) {
        return this.http.delete(`${environment.baseUrl}${path}`).pipe(catchError(this.formatErrors));
    }
};
ApiService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map