import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should not return "Hola Mundo!"', () => {
      expect(appController.getHello()).not.toBe('Hola Mundo!');
    });
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
    it('should return have a New Feature', () => {
      expect(appController.getNewFeature).toBeDefined();
    });
    // it('This should always fail', () => {
    //   expect(appController.getHello()).toBe('Fail!');
    // });
  });
});
