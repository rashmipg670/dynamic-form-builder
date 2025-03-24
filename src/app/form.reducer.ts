import { createReducer, on } from '@ngrx/store';
import { addField, updateField, deleteField, loadFieldsSuccess } from './form.actions';
import { FormField } from './form-field.model';

export interface FormState {
  fields: FormField[];
}

const initialState: FormState = { fields: [] };

export const formReducer = createReducer(
  initialState,
  on(addField, (state, { field }) => ({ fields: [...state.fields, field] })),
  on(updateField, (state, { field }) => ({
    fields: state.fields.map(f => f.id === field.id ? field : f),
  })),
  on(deleteField, (state, { id }) => ({
    fields: state.fields.filter(f => f.id !== id),
  })),
  on(loadFieldsSuccess, (state, { fields }) => ({ fields }))
);
