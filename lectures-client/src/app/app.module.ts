import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import {MatSelectModule} from '@angular/material/select'
import {MatCellDef, MatHeaderCell, MatTableModule} from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { LectureListComponent } from './components/lecture-list/lecture-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LectureListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    FormsModule
  ], 
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
