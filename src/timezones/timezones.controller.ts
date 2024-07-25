import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('timezones')
export class TimezonesController {
    @Get()
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
        return({
            userId:dcUserId,
            message: "Added",
            tiemzone: body.timezone
        })
    }
}
