import { __decorate, __metadata } from "tslib";
import { Directive, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
import { UserService } from '../@core/mock/users.service';
let ShowAuthedDirective = class ShowAuthedDirective {
    constructor(templateRef, userService, viewContainer) {
        this.templateRef = templateRef;
        this.userService = userService;
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.userService.isAuthenticated.subscribe((isAuthenticated) => {
            if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        });
    }
    set appShowAuthed(condition) {
        this.condition = condition;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ShowAuthedDirective.prototype, "appShowAuthed", null);
ShowAuthedDirective = __decorate([
    Directive({ selector: 'ngx-appShowAuthed' }),
    __metadata("design:paramtypes", [TemplateRef,
        UserService,
        ViewContainerRef])
], ShowAuthedDirective);
export { ShowAuthedDirective };
//# sourceMappingURL=show-authed.directive.js.map