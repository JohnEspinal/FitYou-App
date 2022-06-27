import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceInternetService {

  constructor(
    private http : HttpClient
  ) { }

  ImportDataFromExcel(file : FileList){
    console.log("file");
    console.log(file);
    return this.http.post(`https://localhost:44384/api/office/Importar`, file);
  }

}
