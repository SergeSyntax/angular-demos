import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, targetUnits: string): any {
    if (!value) return '';
    const kmValue = value * 1.60934;
    const mValue = kmValue * 1000;
    const cmValue = mValue * 1000;

    switch (targetUnits) {
      case 'km':
        return kmValue;
      case 'm':
        return mValue;
      case 'cm':
        return cmValue;

      default:
        throw new Error('Target unit not supported');
    }

    return value * 1.60934;
  }
}
