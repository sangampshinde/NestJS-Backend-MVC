// Controllers: controllers in nestjs are responsible for handling incoming HTTP request and return appropriate response
// they act as bridge between client(browser,postman) and internal logic of your NEXTJS Application.
// to generate controller using CLI => nest g controller [name]




// import { Controller } from "@nestjs/common";




// // http://localhost:3000/users
// @Controller('users')
// export class UserController{

//     getUsers(){
//         return `you made a GET Request get all users`;
//     }
// }


// ================================================================
// Routing Decorator
// Route Decorator are used to define routes that your application will respond to 
// They provide a declearative way to map HTTP request (GET,POST,PUT,PATCH,DELETE) to specify controller methods

import { Controller, Get, Post } from "@nestjs/common";




// http://localhost:3000/users
@Controller('users')
export class UserController{

    @Get()
    getUsers(){
        return `you made a GET Request get all users`;
    }

    @Post()
    createUser(){
        return`new user has been created`
    }
}