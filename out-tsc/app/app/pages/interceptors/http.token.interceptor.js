import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { JwtService } from '../../@core/mock';
let HttpTokenInterceptor = class HttpTokenInterceptor {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    intercept(req, next) {
        const headersConfig = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
        const token = this.jwtService.getToken();
        if (token) {
            headersConfig['Authorization'] = `Bearer ${token}`;
        }
        if (req.url.endsWith('user/cv-upload')) {
            delete headersConfig['Content-Type'];
        }
        const request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
    }
};
HttpTokenInterceptor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [JwtService])
], HttpTokenInterceptor);
export { HttpTokenInterceptor };
//# sourceMappingURL=http.token.interceptor.js.map