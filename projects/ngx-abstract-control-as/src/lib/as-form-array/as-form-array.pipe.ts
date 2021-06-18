import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

@Pipe({
  name: 'asFormArray',
})
export class AsFormArrayPipe implements PipeTransform {
  transform(
    value: AbstractControl | undefined | null,
    ...args: unknown[]
  ): FormArray | undefined {
    return value ? (value as FormArray) : undefined;
  }
}
