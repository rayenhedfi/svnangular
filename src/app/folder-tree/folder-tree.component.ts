import { Component } from '@angular/core';
import { Folder } from '../folder/folder.model';
import { FolderService } from '../folder/folder.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folder-tree',
  templateUrl: './folder-tree.component.html',
  styleUrls: ['./folder-tree.component.css']
})
export class FolderTreeComponent {
  constructor(private http: HttpClient) {}

  rootFolder: Folder = {
    name: 'Root',
    subfolders: []
  };
}

