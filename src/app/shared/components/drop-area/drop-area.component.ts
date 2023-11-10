import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Storage , ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';



@Component({
  standalone: true,
  imports: [
    CommonModule
  ],
  selector: 'app-drop-area',
  templateUrl: './drop-area.component.html',
  styleUrls: ['./drop-area.component.css']
})
export class DropAreaComponent implements OnInit {
  // cero -> revisar el problema del proque no se puede subir a firebase un archivo desde angular
  // primer -> subir los documentos y recopilar los documentos subidos
  // segundo -> actualizar el nombre de documento si ha cambiado y revisar si cambiando el nombre cambia la recoleccion de archivos

  @Input() horizontal: boolean = true;
  @Input() vertical: boolean = false;
  @Input() carpeta: string = 'reciclaje';
  @Output() fileUrlsEmitter: EventEmitter<string[]> = new EventEmitter();

  url:string='';
  activate: boolean = false;
  files: FileList | null = null;
  locationRef !: any;
  dragText = 'Arrastra el documento y suelta';
  imageList: any[] = [];

  constructor(
    private storageFirebase: Storage
  ) {}

  ngOnInit(): void {
    // this.getImages();
    if(this.horizontal) {
      this.vertical = false;
    }
    if(this.vertical) {
      this.horizontal = false;
    }
  }
  getImages(){
    const imgsRef = ref(this.storageFirebase, 'img');

    listAll(imgsRef)
      .then(res => {

        res.items.forEach(async item => {
          const url = await getDownloadURL(item);
          console.log(url);
        })

      })
      .catch(error => {
        console.log(error)
      })
  }

  public onButtonClick() {
    const input = document.querySelector('#input-file') as HTMLInputElement;
    input.click();

    //console.log(input)
  }

  public onFileChange(event: any) {
    this.files = event.target.files[0];
    console.log(this.files)
    console.log(environment.firebase)
    this.locationRef = ref(this.storageFirebase, '');
    console.log(this.locationRef)
    const link = this.showFiles(this.files);
  }

  private showFiles(files:any):any {
    if (files) {
      return new Promise((resolve,reject)=>{
        uploadBytes(this.locationRef,files).then(()=>{
          const startRef = ref(this.storageFirebase,'');
          getDownloadURL(startRef).then((data)=>{
            this.url = data;
            console.log(this.url)
            resolve(this.url);
          })
        })
      })
    }
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

  private sumitFile(nombreArchivo: string, file: File) {
    // this.fileUrlsEmitter.emit(this.imageList);
    const docRef = ref(this.storageFirebase, this.carpeta + nombreArchivo); //falta nombre
    uploadBytes(docRef, file)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }
}
