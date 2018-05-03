import {NgModule} from '@angular/core';
import {
    HttpService,
    HeaderComponent,
    CookieService,
    CookieOptions,
    AuthenticationService,
    FormBuilderService,
    FormatErrorsPipe
} from './index';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
        HeaderComponent,
        FormatErrorsPipe
    ],
    exports: [
        HeaderComponent,
        CommonModule,
        FormatErrorsPipe
    ],
    providers: [
        HttpService,
        AuthenticationService,
        {provide: CookieOptions, useValue: {}}, CookieService,
        FormBuilderService
    ]
})
export class SharedModule {
}
