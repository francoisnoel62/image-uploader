import { Component, OnInit } from '@angular/core';
import { AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent {

  selectedFile: File | undefined;

  constructor(private af:AngularFireStorage) { }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.af.upload("/files"+Math.random()+this.selectedFile, this.selectedFile);
  }

}
