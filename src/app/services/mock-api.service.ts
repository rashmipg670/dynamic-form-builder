import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormField } from '../form-field.model';

@Injectable({ providedIn: 'root' })
export class MockApiService {
  private formFields: FormField[] = [];

  getFormFields(): Observable<FormField[]> {
    return of(this.formFields);
  }

  submitForm(data: any): Observable<{ success: boolean }> {
    console.log('Form Data Submitted:', data);
    return of({ success: true });
  }
}
