import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeAccount',
})
export class TypeAccountPipe implements PipeTransform {
  transform(type: boolean, activeColor: string): string {
    const radioBox = 'radio-box';
    const radioBoxActive = `${radioBox} ${activeColor}`;

    if (!type) return radioBox;

    if (type && activeColor) return radioBoxActive;

    return radioBox;
  }
}
