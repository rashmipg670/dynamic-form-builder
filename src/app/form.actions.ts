import { createAction, props } from '@ngrx/store';

export const addForm = createAction('[Form] Add', props<{ form: any }>());
import { FormField } from './form-field.model';

export const addField = createAction('[Form] Add Field', props<{ field: FormField }>());
export const updateField = createAction('[Form] Update Field', props<{ field: FormField }>());
export const deleteField = createAction('[Form] Delete Field', props<{ id: number }>());
export const loadFields = createAction('[Form] Load Fields');
export const loadFieldsSuccess = createAction('[Form] Load Fields Success', props<{ fields: FormField[] }>());
