import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormPreviewComponent } from './components/form-preview/form-preview.component';
import { FormListComponent } from './form-list/form-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: 'form-list', component: FormListComponent },
  { path: 'form-preview', component: FormPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
