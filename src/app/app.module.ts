import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule} from "@angular/fire/compat";
import { AngularFireStorageModule} from "@angular/fire/compat/storage";
import { AngularFireDatabaseModule} from "@angular/fire/compat/database";

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';

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
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
