import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceInternetService } from '../../service/service-internet.service';

@Component({
  selector: 'app-insert-internetplan',
  templateUrl: './insert-internetplan.component.html',
  styleUrls: ['./insert-internetplan.component.css']
})
export class InsertInternetplanComponent implements OnInit {
  @ViewChild('fileInput') el: ElementRef;
  //fileToUpload : File | null = null;
  apenddata : FormData;

  constructor(
    private serviceExcel : ServiceInternetService
  ) { }

  ngOnInit(): void {
  }

  onFileSelect(){
    var data = this.el.nativeElement.files[0];
    if(data != null){;
      this.serviceExcel.ImportDataFromExcel(data!);
    }
  }
}
