import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CoreModule} from './@core/core.module';
import {ThemeModule} from './@theme/theme.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {
    NbDialogModule,
    NbMenuModule,
    NbSidebarModule, NbStepperModule,
    NbToastrModule,
    NbWindowModule,
    NbCardModule,
} from '@nebular/theme';
import {ApiService} from './@core/mock/api.service';
import {JwtService} from './@core/mock';
import {UserService} from './@core/mock/users.service';
import {SocialLoginModule, SocialAuthServiceConfig} from 'angularx-social-login';
import {
    GoogleLoginProvider,
    FacebookLoginProvider,
} from 'angularx-social-login';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {environment} from '../environments/environment';
import {HttpTokenInterceptor} from './pages/interceptors';
import {AppShowAuthedDirective} from './pages/app-show-authed.directive';


@NgModule({
    declarations: [AppComponent, AppShowAuthedDirective],
    imports: [
        SocialLoginModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        NbSidebarModule.forRoot(),
        NbMenuModule.forRoot(),
        NbCardModule,
        NbDialogModule.forRoot(),
        NbWindowModule.forRoot(),
        NbToastrModule.forRoot(),
        CoreModule.forRoot(),
        ThemeModule.forRoot(),
        NbStepperModule,
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        UserService,
        ApiService,
        JwtService,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            environment.googleClientID,
                        ),
                    },
                    {
                        id: FacebookLoginProvider.PROVIDER_ID,
                        provider: new FacebookLoginProvider(environment.facebookClientID),
                    },
                ],
            } as SocialAuthServiceConfig,
        },
    ],
    exports: [],
})
export class AppModule {
}
