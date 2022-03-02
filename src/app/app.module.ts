import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule} from "@angular/fire/compat";
import { AngularFireStorageModule} from "@angular/fire/compat/storage";
import { AngularFireDatabaseModule} from "@angular/fire/compat/database";

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSliderModule} from "@angular/material/slider";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatSliderModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
