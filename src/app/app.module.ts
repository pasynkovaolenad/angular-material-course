import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        HomeComponent,
        SettingsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
