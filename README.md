# ngx-abstract-control-as

If you are using strict template checking and getting the following errors in your reactive forms this library can help out.

```bash
 Type 'AbstractControl' is missing the following properties from type
      'FormGroup': controls, registerControl, addControl, removeControl, and 3
      more.
```

```bash
Type 'AbstractControl' is not assignable to type 'any[] | Iterable<any> | (Iterable<any> & any[]) | (any[] & Iterable<any>)'.
  Type 'AbstractControl' is not assignable to type 'any[] & Iterable<any>'.
    Type 'AbstractControl' is not assignable to type 'any[]'.
```

## Usage

Install the package 

```bash
 npm i --save ngx-abstract-control-as
```

Import the library at module level

```typescript
import { NgxAbstractControlAsModule } from 'ngx-abstract-control-as';

@NgModule({
  declarations: [],
  imports: [  
    NgxAbstractControlAsModule,
    ...
  ],
  
})
expo
```

Use the **asFormGroup** or **asFormArray** pipes where ever you are getting the error.

```html
 <div class="details" [formGroup]="testForm.get('details') | asFormGroup">
      <mat-form-field>
        <mat-label>name</mat-label>
        <input matInput placeholder="name" formControlName="name" />
      </mat-form-field>
    </div>
```

```html
 <div class="addresses">
    <div
    *ngFor="
        let addressFormGroup of (testForm.get('addresses') | asFormArray)
        .controls
    "
    [formGroup]="addressFormGroup | asFormGroup"
    >
    <mat-form-field>
        <mat-label>city</mat-label>
        <input matInput placeholder="city" formControlName="city" />
    </mat-form-field>
    </div>
</div>
```

