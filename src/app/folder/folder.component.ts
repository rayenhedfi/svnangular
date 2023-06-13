import { Component, Input } from '@angular/core';
import { Folder } from './folder.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FolderService } from './folder.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent {
  @Input() folder: Folder = { name: '', subfolders: [] };
  structureData: any;
  constructor(private http: HttpClient,private folderService: FolderService) {}
  showSubfolders = false;
  


  addSubfolder() {
    const subfolderName = prompt('Enter the subfolder name:');
    if (subfolderName) {
      const newSubfolder: Folder = { name: subfolderName, subfolders: [] };
      this.folder.subfolders.push(newSubfolder);
      this.showSubfolders = true; // Afficher les sous-dossiers après en avoir ajouté un*
    }
  }
  resetStructure() {
    this.folder.subfolders = [];
  }
  /*downloadFolderStructure(): void {
    const folderStructure = JSON.stringify(this.folder, null, 2);
    const blob = new Blob([folderStructure], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'folder-structure.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }*/
  /*onApproveButtonClick() {
    const structureData = this.structureData;
    this.folderService.sendStructureData(structureData).subscribe(
      response => {
        console.log('Structure envoyée avec succès au backend.', response);
      },
      error => {
        console.error('Une erreur s\'est produite lors de l\'envoi de la structure.', error);
        // Add the following line to log the complete error object
        console.error(error);
      }
    );
  }*/
  onApproveButtonClick() {
    const structureData = this.folder;
    this.folderService.sendStructureData(structureData).subscribe(
      response => {
        console.log('Structure envoyée avec succès au backend.', response);
      },
      error => {
        console.error('Une erreur s\'est produite lors de l\'envoi de la structure.', error);
        // Ajoutez la ligne suivante pour afficher l'objet d'erreur complet
        console.error(error);
      }
    );
  }
  
  
}

