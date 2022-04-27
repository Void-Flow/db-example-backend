import { join } from "path";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config : MysqlConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "V01dFl0wMyS0lP455w0rd!",
    database: "usercrud",
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    // Don't use in production
    synchronize: true,
}

export default config;