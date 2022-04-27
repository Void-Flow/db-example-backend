import { Injectable } from "@nestjs/common";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
import { InjectRepository } from "@nestjs/typeorm";
import { userDTO } from "src/DTO's";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { User } from "../Entities/user.entity";

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

    getAll(): Promise<User[]> {
        return this.usersRepository.find(); // SELECT * FROM users
    }

    async getOneById(id: number): Promise<User> {
        try{
            const user = await this.usersRepository.findOneOrFail({where: {id: id}}); // SELECT * FROM users WHERE id = ?
            return user;
        } catch (err) {
            throw new Error("User not found -> id: " + id);   
        }
    }

    async create(name: string, email: string, password: string): Promise<User> {
        try{
            const newUser = await this.usersRepository.save({name, email, password}); // INSERT INTO users (name, email, password) VALUES (?, ?, ?)
            return newUser;
        } catch (err) {
            throw err;
        }
    }

    async delete(id: number): Promise<DeleteResult> {
        try{
            const result = await this.usersRepository.delete(id); // DELETE FROM users WHERE id = ?
            return result;
        } catch (err) {
            throw err;
        }
    }

    async update(id: number, user: userDTO): Promise<UpdateResult> {
        var check = undefined;

        try{
            check =  await this.usersRepository.findOneOrFail({where: {id: id}});
        } catch (err) {
            throw err;
        }

        if(!check){
            throw new Error("User not found -> id: " + id);
        }

        return this.usersRepository.update({ id }, user);

    }

}