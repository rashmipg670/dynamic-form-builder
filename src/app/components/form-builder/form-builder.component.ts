import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addForm } from 'src/app/form.actions';
import { MockApiService } from 'src/app/services/mock-api.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  formGroup: FormGroup;
  fields: { type: string; label: string }[] = [];

  constructor(private fb: FormBuilder, private store: Store, private apiService: MockApiService) {
    this.formGroup = this.fb.group({});
  }

  addField(type: string) {
    const fieldName = `field_${this.fields.length}`;
    let validators = [];

    // Add validators based on field type
    if (type === 'text') {
      validators.push(Validators.required);
    } else if (type === 'checkbox') {
      validators.push(Validators.requiredTrue); // Checkbox should be checked
    }
    // Add more validations as needed for other field types

    this.fields.push({ type, label: type.toUpperCase() });
    this.formGroup.addControl(fieldName, this.fb.control('', validators));
  }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
  }

  saveForm() {
    if (this.formGroup.valid) {
      this.store.dispatch(addForm({ form: this.fields }));
      this.formGroup.reset();
      alert('Form saved successfully!');
    } else {
      alert('Please fill in the required fields.');
    }
  }

  submitForm() {
    if (this.formGroup.valid) {
      this.apiService.submitForm(this.formGroup.value).subscribe(response => {
        this.formGroup.reset();
        if (response.success) {
          alert('Form submitted successfully!');
        } else {
          alert('Form submission failed.');
        }
      });
    } else {
      alert('Please fill in the required fields.');
    }
  }
}