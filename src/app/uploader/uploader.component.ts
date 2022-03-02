import { Component} from '@angular/core';
import { AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize, Observable} from "rxjs";
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent {

  selectedFile: File | undefined;

  uploadPercent: Observable<number> | undefined;
  downloadURL: Observable<string> | undefined;

  constructor(private af:AngularFireStorage, private cb: Clipboard) { }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    const filePath = "/files/"+Math.random()+this.selectedFile;
    const fileRef = this.af.ref(filePath);
    const task = this.af.upload(filePath, this.selectedFile);

    // observe percentage changes
    // @ts-ignore
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL() )
    )
      .subscribe()

  }

}
