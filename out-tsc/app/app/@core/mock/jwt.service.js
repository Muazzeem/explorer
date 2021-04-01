import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let JwtService = class JwtService {
    getToken() {
        return window.localStorage.token;
    }
    saveToken(token) {
        window.localStorage.token = token;
    }
    destroyToken() {
        window.localStorage.removeItem('token');
    }
};
JwtService = __decorate([
    Injectable()
], JwtService);
export { JwtService };
//# sourceMappingURL=jwt.service.js.map