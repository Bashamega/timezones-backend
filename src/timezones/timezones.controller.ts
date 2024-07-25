import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { TimezonesService } from './timezones.service';

@Controller('timezones')
export class TimezonesController {
    constructor(private readonly timezonesService: TimezonesService) {}
    @Get()
    @HttpCode(HttpStatus.FORBIDDEN)
    home() {
        return "Nothing to see here"
    }

    @Get(':userId')
    findTimeZone(@Param('userId') dcUserId: string) {
        return(
            {
                userId: dcUserId,
                timeZone: ""
            }
        )
    }

    @Post(':userId')
    registerTimezone(@Param('userId') dcUserId: number, @Body() body:{timezone:string}){
        if(body.timezone){
            return({
                userId:dcUserId,
                message: "Added",
                tiemzone: body.timezone
            })
        }else{
            return;
        }
    }
}
