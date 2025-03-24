import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
// import { formReducer } from './store/form.reducer';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormPreviewComponent } from './components/form-preview/form-preview.component';
import { LoginComponent } from './components/login/login.component';
// import { FormListComponent } from './components/form-list/form-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormListComponent } from './form-list/form-list.component';
import { formReducer } from './form.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormPreviewComponent,
    LoginComponent,
    FormListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ formState: formReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
