import { User } from "./user.model";
import allUsers from '../simulation-data/users/allUsers.json';



export class UserService {

  getAllUsers(): User[] {
    let users = allUsers.map(user => new User(user.name, user.profilePic, user.supscription, user.rentedTotal, user.actualRented));
    return users;
  }

}
