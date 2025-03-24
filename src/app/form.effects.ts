import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadFields, loadFieldsSuccess } from './form.actions';
import { mergeMap, map } from 'rxjs/operators';
import { MockApiService } from './services/mock-api.service';

@Injectable()
export class FormEffects {
  constructor(private actions$: Actions, private apiService: MockApiService) {}

  loadFields$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFields),
      mergeMap(() =>
        this.apiService.getFormFields().pipe(
          map(fields => loadFieldsSuccess({ fields }))
        )
      )
    )
  );
}
