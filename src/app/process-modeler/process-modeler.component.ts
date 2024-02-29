import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProcessEditorComponent } from 'knite-process-editor';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-process-modeler',
  standalone: true,
  imports: [ProcessEditorComponent, MatDialogModule, TestComponent],
  templateUrl: './process-modeler.component.html',
  styleUrl: './process-modeler.component.scss'
})
export class ProcessModelerComponent {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }

}
