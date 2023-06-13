import { Component } from '@angular/core';
import { Folder } from './folder/folder.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular';
  rootFolder: Folder = { name: 'Root', subfolders: [] };
}

