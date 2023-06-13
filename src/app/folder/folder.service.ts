import { Injectable } from '@angular/core';
import { Folder } from './folder.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  private folders: Folder[] = [];

 // constructor() {}
 constructor(private http: HttpClient) {}
  getFolders(): Folder[] {
   
    return this.folders;
  }

  addFolder(folder: Folder): void {
    this.folders.push(folder);
  }
 // private apiUrl = 'http://localhost:8081'; // L'URL de votre backend Spring


 /* sendStructureData(structureData: any) {
    return this.http.post('${this.apiUrl}/structure/save', structureData);
  }*/
  /*sendStructureData(structureData: any) {
    const url = '${this.apiUrl}/structure/save'; // Interpolate the apiUrl variable
    return this.http.post(url, structureData);
  }*/
  private apiUrl = 'http://localhost:8081'; // L'URL de votre backend Spring

  sendStructureData(structureData: any): Observable<any> {
    const url = `${this.apiUrl}/api/structure/save`; // Ajoutez le chemin d'accès complet de l'API ici
    return this.http.post(url, structureData);
  }
  
}
