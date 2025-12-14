
import { Routes } from '@angular/router';
import { ProductsComponent } from './products/component';
import { BomsComponent } from './boms/component';
import { DocumentsComponent } from './documents/component';
import { EngineeringChangesComponent } from './engineering-changes/component';
import { NpiProcessesComponent } from './npi-processes/component';
import { QualityIssuesComponent } from './quality-issues/component';
import { RequirementsComponent } from './requirements/component';
import { UsersComponent } from './users/component';

export const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'boms', component: BomsComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'engineering-changes', component: EngineeringChangesComponent },
    { path: 'npi-processes', component: NpiProcessesComponent },
    { path: 'quality-issues', component: QualityIssuesComponent },
    { path: 'requirements', component: RequirementsComponent },
    { path: 'users', component: UsersComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full' }
];