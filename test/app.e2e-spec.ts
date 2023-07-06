import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { AppModule } from '../src/modules/app/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('get app status', () => {
    return request(app.getHttpServer())
      .get('/hello')
      .expect(HttpStatus.OK)
      .expect('always-on');
  });

  it('should return the production host value', () => {
    return request(app.getHttpServer())
      .get('/getProductionHost')
      .expect(HttpStatus.OK)
      .expect((res) => {
        const productionHost = process.env.PROD_HOST;

        if (
          res.header['on-running'] !== 'always' ||
          res.text !== productionHost
        ) {
          throw new Error('Invalid response');
        }
      });
  });
});
