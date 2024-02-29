import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ProcessEditorComponent } from 'knite-process-editor';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProcessModelerComponent } from './process-modeler/process-modeler.component';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, ProcessEditorComponent, MatButtonModule, MatDialogModule, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'knite-modeler-app';

  constructor(private router: Router, public dialog: MatDialog) { }

  openEditor() {
    this.router.navigate(['/process-designer'])
    .then(() => {
      window.location.reload();
    });
  }

  onFileChanged(event: any) {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(selectedFile, "UTF-8");
    fileReader.onload = () => {
     const processEditorJson = fileReader.result as string;
     const process = JSON.parse(processEditorJson);
     sessionStorage.setItem("model-id", process.id);
     sessionStorage.setItem("process-editor-json", processEditorJson);
     this.router.navigate(['/process-designer'])
     .then(() => {
       window.location.reload();
     });
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }
}
