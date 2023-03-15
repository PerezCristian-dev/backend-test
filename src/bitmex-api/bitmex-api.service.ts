import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, FindOperator, ILike, Repository } from 'typeorm';
import { CreateBitmexApiDto } from './dto/create-bitmex-api.dto';
import { FindBitMexApiPaginationDto } from './dto/find-bitmex-api-pagination.dto';
import { FindBitMexApiQueryDto } from './dto/find-bitmex-api-query.dto';
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

  async findAll(filter: FindBitMexApiQueryDto, pagination: FindBitMexApiPaginationDto) {

    let { search, dateRange } = filter;

    let date: FindOperator<Date>;

    if(dateRange) {
      dateRange.start = new Date(dateRange.start)
      dateRange.end = new Date(dateRange.end)

      date = Between(dateRange.start, dateRange.end)
    }

    const searchFormatted = search ? ILike(`%${search}%`) : search;

    if(pagination.take) pagination.skip = pagination.skip * pagination.take; // Normalize pagination

    let where = search ? [
      {
        title: searchFormatted,
        date
      },
      {
        link: searchFormatted,
        date
      },
      {
        content: searchFormatted,
        date
      },
    ] : { date }
    
    return await this.announcementRepository.find({
      where,
      ...pagination
    });
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
