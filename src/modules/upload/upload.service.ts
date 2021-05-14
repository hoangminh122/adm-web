
import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadFileService {
    constructor()
    {
        
    }

    async createFiles(files: any) {
        const fileCreated = await this.filesModel.bulkCreate(files);
        return fileCreated.map(value => ({ id: value.id }));
      }
}