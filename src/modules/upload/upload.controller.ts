import { Controller, HttpException, HttpStatus, Post, Req } from "@nestjs/common";
import { ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { compose, flatten, isEmpty, values } from 'lodash/fp';
import { ConfigService } from '@nestjs/config';
import { extname } from "path";
import { ARR_EXTENDSION_ALLOW_UPLOAD } from "src/shared/utils/util-enity";
import { writeFilePromise } from "src/shared/utils/util-file";
import { UploadFileService } from "./upload.service";



@ApiTags('file')
@Controller("file")
export class UploadFileController {
    constructor(
        private configService: ConfigService,
        private uploadFileService: UploadFileService,
    )
    {
        
    }

    @Post('upload')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
        type: 'object',
        properties: {
            files: {
            type: 'string',
            format: 'binary',
            },
        },
        },
    })
    public async importFileAttachPo(@Req() req) {
    const files = compose(
      flatten,
      values,
    )(req.body);
    if (isEmpty(files)) {
      //throw new MessageCodeError('pmrq:uploadFile:FilesNotAttach');
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'pmrq:uploadFile:FilesNotAttach',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const folderUpload = this.configService.get('FOLDER_UPLOAD');
    const mapUploadPromise = files.map(async file => {
      const extName = extname(file.filename);
      if (ARR_EXTENDSION_ALLOW_UPLOAD.includes(extName.toLowerCase())) {
        const randomName = Array(32)
          .fill(null)
          .map(() => Math.round(Math.random() * 16).toString(16))
          .join('');

        const fileName = `${randomName}${extName}`;
        await writeFilePromise(`${folderUpload}/${fileName}`, file.data);
        return {
          originalName: file.filename,
          fileName,
          size: file.data.length,
        };
      }
    });
    const dataFile = await Promise.all(mapUploadPromise);

    const fileCreated = await this.uploadFileService.createFiles(dataFile);

    return fileCreated;
  }

}