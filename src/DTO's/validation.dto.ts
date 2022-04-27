import {IsString} from 'class-validator';

export class userDTO {

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

}