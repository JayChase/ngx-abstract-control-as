import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

@Pipe({
  name: 'asFormArray',
})
export class AsFormArrayPipe implements PipeTransform {
  transform(value: AbstractControl, ...args: unknown[]): FormArray {
    return value as FormArray;
  }
}
