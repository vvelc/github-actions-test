import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppController);
  });

  describe('root', () => {
    it('should not return "Hola Mundo!"', () => {
      expect(appService.getHello()).not.toBe('Hola Mundo!');
    });
    it('should return "Hello World!"', () => {
      expect(appService.getHello()).toBe('Hello World!');
    });
    it('should return "Hello World!"', () => {
      expect(appService.getHello()).toBe('Hello World!');
    });
  });
});
