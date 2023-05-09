import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import axios from 'axios';
import { imagesUpdt, Image, Photo, RawResponse } from '../types';

@Injectable()
export class ImagesService {
  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
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

      const allData: imagesUpdt[] = rawData
        .flat()
        .map((el: Image | Photo): imagesUpdt => {
          const url = 'path' in el ? el.path : el.url;

          return { id: el.id, title: el.title, url };
        });

      return allData;
    } catch (error) {
      console.error(error);

      return `Internal error: ${error.message}`;
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
