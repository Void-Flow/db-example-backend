import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import config from "ormconfig";
import { User } from "src/Entities/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([User]), UserModule],
    controllers: [UserController],
    providers: [UserService]
})

export class UserModule {}
