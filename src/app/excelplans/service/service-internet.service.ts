import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceInternetService {

  filetoUpload : File;

  constructor(
    private http : HttpClient
  ) { }

  ImportDataFromExcel(file : File){
    console.log("file");
    console.log(file);
    let fomdata = new FormData();
    fomdata.append("file",file,file.name);
    console.log(fomdata);
    return this.http.post(`https://localhost:44384/api/office/Importar`, fomdata);
  }

}
