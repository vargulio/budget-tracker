import {NgModule} from '@angular/core';
import {
    HttpService,
    HeaderComponent,
    CookieService,
    UserDataService,
    CookieOptions,
    AuthenticationService,
    FormBuilderService
} from './index';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    providers: [
        HttpService,
        UserDataService,
        AuthenticationService,
        {provide: CookieOptions, useValue: {}}, CookieService,
        FormBuilderService
    ]
})
export class SharedModule {
}
