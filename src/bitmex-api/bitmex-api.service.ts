import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBitmexApiDto } from './dto/create-bitmex-api.dto';
import { UpdateBitmexApiDto } from './dto/update-bitmex-api.dto';
import { Announcement } from './entities/announcement.entity';

@Injectable()
export class BitmexApiService {
  constructor(
    @InjectRepository(Announcement)
    private readonly announcementRepository: Repository<Announcement>,
  ) {}

  async create(createBitmexApiDto: CreateBitmexApiDto): Promise<Announcement> {
    const announcement = this.announcementRepository.create(createBitmexApiDto);
    return await this.announcementRepository.save(announcement);
  }

  async findAll() {
    return await this.announcementRepository.find();
  }

  async findOne(id: number) {
    return await this.announcementRepository.findOneByOrFail({ id });
  }

  async update(
    id: number,
    updateBitmexApiDto: UpdateBitmexApiDto,
  ): Promise<Announcement> {
    try {
      const add = await this.findOne(id);

      if (!add) throw new NotFoundException(`${id} not found`);

      const updated = this.announcementRepository.merge(
        add,
        updateBitmexApiDto,
      );

      return await this.announcementRepository.save(updated);
    } catch (error) {
      throw new NotFoundException(`${id} not found.`);
    }
  }

  async remove(id: number): Promise<Announcement> {
    const announcement = await this.findOne(id);
    await this.announcementRepository.remove(announcement);
    return { ...announcement, id };
  }
}
