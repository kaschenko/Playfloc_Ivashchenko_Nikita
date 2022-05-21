import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";


async function start() {
    const PORT = process.env.PORT
    const app = await NestFactory.create(AppModule, { cors: true })

    await  app.listen(PORT, () => console.log(`Server started on ${PORT}`))

}

start()