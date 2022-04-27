import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import {userDTO} from "../DTO's";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    getAllUsers() {
        return this.userService.getAll();
    }

    @Get(':id')
    getOneById(@Param('id') id: number) {
        try{
            return this.userService.getOneById(id);
        } catch (err) {
            //Error handling missing
            return err;
        }
    }

    @Post()
    createUser (
        @Body("user") user: userDTO
    ){
        return this.userService.create(user.name, user.email, user.password);
    }

    @Patch()
    patchUser(
        @Body("id") id: number,
        @Body("user") user: userDTO
    ){
        try{
            return this.userService.update(id, user);
        } catch (err) {
            throw err;
        }
    }

    @Delete()
    deleteUser(
        @Body("id") id: number
    ){
        return this.userService.delete(id);
    }


}