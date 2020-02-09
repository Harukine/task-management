import { ArgumentMetadata, PipeTransform } from '@nestjs/common/interfaces/features/pipe-transform.interface';

export class TaskStatusValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value,', value);
    console.log('metdata', metadata);
    return value;
  }
}
