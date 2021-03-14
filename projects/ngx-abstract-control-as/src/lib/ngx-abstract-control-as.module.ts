import { NgModule } from '@angular/core';
import { AsFormArrayPipe } from './as-form-array/as-form-array.pipe';
import { AsFormGroupPipe } from './as-form-group/as-form-group.pipe';

@NgModule({
  declarations: [AsFormGroupPipe, AsFormArrayPipe],
  imports: [],
  exports: [AsFormGroupPipe, AsFormArrayPipe],
})
export class NgxAbstractControlAsModule {}
