import { Injectable, Inject } from '@nestjs/common';
import {fileFromPath} from "formdata-node/file-from-path"
import {FormData} from "formdata-node"

@Injectable()
export class ApiFaceRecoService {
  constructor(
    @Inject('AxiosInstance') private readonly apiRecogService: any,
  ) {}

  async sendImgPerson(filename: string) {

    const pathImg = "./arquivos/pessoas/" + filename

    const form = new FormData()

    form.set("photo", await fileFromPath(pathImg))

    await this.apiRecogService.post('/server/create-person', form);
    
  }
}
