import { Controller, Get } from "@nestjs/common";
import { Test } from '@nestjs/testing';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService)
    {

    }

    @Get('/')
    getTest()
    {
        this.testService.getTest();
    }
}