import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserService} from './users.service';

@Directive({
    selector: '[ngxAppShowAuthed]',
})
export class AppShowAuthedDirective implements OnInit {
    constructor(
        private templateRef: TemplateRef<any>,
        private userService: UserService,
        private viewContainer: ViewContainerRef,
    ) {
    }

    condition: boolean;

    ngOnInit() {
        this.userService.isAuthenticated.subscribe(
            (isAuthenticated) => {
                if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                } else {
                    this.viewContainer.clear();
                }
            },
        );
    }

    @Input() set AppShowAuthedDirective(condition: boolean) {
        this.condition = condition;
    }

}
