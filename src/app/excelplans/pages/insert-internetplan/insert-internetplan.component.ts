import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceInternetService } from '../../service/service-internet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insert-internetplan',
  templateUrl: './insert-internetplan.component.html',
  styleUrls: ['./insert-internetplan.component.css']
})
export class InsertInternetplanComponent implements OnInit {
  @ViewChild('fileInput') el: ElementRef;
  //fileToUpload : File | null = null;
  apenddata : File;

  constructor(
    private serviceExcel : ServiceInternetService
  ) { }

  ngOnInit(): void {
  }

  onFileSelect(){
    this.apenddata = this.el.nativeElement.files[0];

    if(this.apenddata != null){

      this.serviceExcel.ImportDataFromExcel(this.apenddata!).subscribe( response => {
        Swal.fire("Creado!", `
          <h2>${response}</h2>
          <p>Su plan fue creado satisfactoriamente!</p>
          `,
        'success'
        ).then(
          this.el.nativeElement.reset()
        );
      });
    }
  }
}
