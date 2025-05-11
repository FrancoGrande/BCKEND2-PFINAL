export default class UserDTO{

    constructor(userToValidate){
            this.name= userToValidate.name;
            this.email = userToValidate.email;
            this.role = userToValidate ? userToValidate.role : "user_role";
    }
    
}