import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Announcement from 'src/bitmex-api/entities/announcement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApiService {
  constructor(
    @InjectRepository(Announcement)
    private readonly announcementRepository: Repository<Announcement>,
  ) {}

  async updateDB(): Promise<boolean> {
    fetch('https://www.bitmex.com/api/v1/announcement')
      .then((response) => response.json())
      .then((data: Array<Announcement>) =>
        data.forEach(async (data) => {
          const announcement = this.announcementRepository.create(data);
          await this.announcementRepository.save(announcement);
        }),
      );

    return true;
  }
}
