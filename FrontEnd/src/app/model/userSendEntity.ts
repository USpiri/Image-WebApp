import { User } from "./userEntity";

export class UserSend {

    user:User;
    image:FormData;

    constructor( user:User , image:FormData ){
        this.user = user;
        this.image = image;
    }

}