import {
  HttpStatus,
  Injectable,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import axios from 'axios';
import { imagesUpdt, Image, Photo, RawResponse } from '../types';

@Injectable()
export class ImagesService {
  create(createImageDto: CreateImageDto) {
    // return 'This action adds a new image';

    return createImageDto;
  }

  async #getAllProm(url: string): Promise<string | RawResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(url);

        resolve(data[0]);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  async findAll(): Promise<string | imagesUpdt[]> {
    try {
      const rawData: (string | RawResponse)[] = await Promise.all([
        this.#getAllProm(
          'https://my-json-server.typicode.com/icedrone/json-demo-server/images',
        ),
        this.#getAllProm(
          'https://my-json-server.typicode.com/icedrone/json-demo-server/photos',
        ),
      ]);

      if (!rawData[0].length || !rawData[1].length)
        throw new NotFoundException('Error while fetching images', {
          cause: new Error("Couldn't fetch"),
        });

      const allData: imagesUpdt[] = rawData
        .flat()
        .map((el: Image | Photo): imagesUpdt => {
          const url = 'path' in el ? el.path : el.url;

          return { id: el.id, title: el.title, url };
        });

      return allData;
    } catch (error) {
      console.error(error);

      throw new HttpException(
        error.message || 'Custom error message',
        HttpStatus.BAD_REQUEST,
        {
          cause: error.message,
        },
      );
    }
  }

  async findOne(id: number) {
    return `This action finds a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
