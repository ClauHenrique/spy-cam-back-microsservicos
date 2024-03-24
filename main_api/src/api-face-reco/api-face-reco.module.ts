import { Module } from '@nestjs/common';
import axios from 'axios';
import { ApiFaceRecoService } from './api-face-reco.service';

@Module({
  providers: [
    {
      provide: 'AxiosInstance',
      useValue: axios.create({
        baseURL: "http://127.0.0.1:5000",
        timeout: 1000,
        headers: { 'X-Custom-Header': 'foobar' },
      }),
    },
    ApiFaceRecoService
  ],
  exports: ['AxiosInstance', ApiFaceRecoService],
})
export class ApiFaceRecoModule {}
