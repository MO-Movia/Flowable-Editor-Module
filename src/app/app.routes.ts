import { Routes } from '@angular/router';
import { ProcessModelerComponent } from './process-modeler/process-modeler.component';

export const routes: Routes = [
    {
        path: 'process-designer',
        component: ProcessModelerComponent,
        title: 'Process Modeler App'
    }
];
