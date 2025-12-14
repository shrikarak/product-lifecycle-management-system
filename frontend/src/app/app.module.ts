
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/component';
import { BomsComponent } from './boms/component';
import { DocumentsComponent } from './documents/component';
import { EngineeringChangesComponent } from './engineering-changes/component';
import { NpiProcessesComponent } from './npi-processes/component';
import { QualityIssuesComponent } from './quality-issues/component';
import { RequirementsComponent } from './requirements/component';
import { UsersComponent } from './users/component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BomsComponent,
    DocumentsComponent,
    EngineeringChangesComponent,
    NpiProcessesComponent,
    QualityIssuesComponent,
    RequirementsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
