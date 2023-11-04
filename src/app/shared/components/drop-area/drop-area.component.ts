import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface ExtensionMappings {
  [key: string]: string;
}

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-drop-area',
  templateUrl: './drop-area.component.html',
  styleUrls: ['./drop-area.component.css']
})
export class DropAreaComponent {

  @Input() horizontal: boolean = true;
  @Input() vertical: boolean = false;

  activate: boolean = false;
  files: FileList | null = null;
  dragText = 'Arrastra el documento y suelta';
  imageList: any[] = [];

  constructor() {}

  public onButtonClick() {
    const input = document.querySelector('#input-file') as HTMLInputElement;
    input.click();
  }

  public onFileChange(event: any) {
    this.files = event.target.files;
    this.showFiles(this.files);
  }

  public onDragOver(event: DragEvent) {
    event.preventDefault();
    this.activate = true;
    this.dragText = 'Suelta el documento';
  }

  public onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.activate = false;
    this.dragText = 'Arrastra el documento y suelta';
  }

  public onDrop(event: DragEvent) {
    event.preventDefault();
    this.activate = false;
    this.dragText = 'Arrastra el documento y suelta';
    if (event.dataTransfer) {
      this.files = event.dataTransfer.files;
      this.showFiles(this.files);
    }
  }

  private showFiles(files: FileList | null) {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const docType = file.type;
        const validExtensions: ExtensionMappings = {
          // img
          'image/jpg':    '../../../../assets/img/icons/img.png',
          'image/png':    '../../../../assets/img/icons/img.png',
          'image/jpeg':   '../../../../assets/img/icons/img.png',
          'text/plain':   '../../../../assets/img/icons/txt.png',

          // pdf
          'application/pdf':  '../../../../assets/img/icons/pdf.png',
          
          // excel
          'application/vnd.ms-excel':                                             '../../../../assets/img/icons/excel.png',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':    '../../../../assets/img/icons/excel.png',
          
          // word
          'application/msword':                                                       '../../../../assets/img/icons/word.png',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document':  '../../../../assets/img/icons/word.png',
          
          // powerpoint
          'application/vnd.ms-powerpoint':                                                '../../../../assets/img/icons/ppt.png',
          'application/vnd.openxmlformats-officedocument.presentationml.presentation':    '../../../../assets/img/icons/ppt.png',
        };
        
        const defaultIcon = '../../../../assets/img/icons/otros.png';
        
        const fileUrl = validExtensions[docType] || defaultIcon;

        const fileReader = new FileReader();
          const id = 'file-' + Math.random().toString(32).substring(7);

          fileReader.onload = (e) => {
            const image = {
              id: id,
              src: fileUrl,
              alt: file.name,
              status: 'Cargando...',
              success: true
            };
            this.imageList.push(image);
          };

          fileReader.readAsDataURL(file);
      }
    }

  }
}
