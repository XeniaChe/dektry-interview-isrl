import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import axios from 'axios';
import { Response } from '../types';

@Injectable()
export class ImagesService {
  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }

  async #getAll(url: string) {
    const { data } = await axios.get(url);

    return data[0];
  }

  async findAll(): Promise<string | Response> {
    try {
      const images = await this.#getAll(
        'https://my-json-server.typicode.com/icedrone/json-demo-server/images',
      );

      const photos = await this.#getAll(
        'https://my-json-server.typicode.com/icedrone/json-demo-server/photos',
      );

      return { images, photos };
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
