import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

//CUSTOM PIPE para validar que lo que se envia es mongo ID
@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // console.log({ value, metadata });

    if (!isValidObjectId(value))
      throw new BadRequestException(`${value} is not a valid id`);
    return value;
  }
}
