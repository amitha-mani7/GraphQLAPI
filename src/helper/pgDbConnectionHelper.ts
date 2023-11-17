
import { DataSource } from "typeorm"

        export  const PgDbDataSource = new DataSource({
            type: "postgres",
            host: "3.214.153.201",
            //host: "propono-db.cgdfzk0yjguf.us-east-1.rds.amazonaws.com",
            port: 5432,
            username: "test",
            password: "pillartestaccount",
            database: "sandbox",
            synchronize: true,
            logging: true,
            entities: ['./dist/Entities/ProponoPlaces.js'],
            subscribers: [],
            migrations: [],
            ssl: true,
            extra: {
                ssl: {
                    rejectUnauthorized: false
                }
            }

        });
        PgDbDataSource.initialize()
            .then(() => {
                console.log("Data Source has been initialized!")
            })
            .catch((err) => {
                console.error("Error during Data Source initialization", err)
            })
    
export default PgDbDataSource


