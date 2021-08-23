import { Subject } from "rxjs";
import { User } from "../model/User";

export class UserService {
    // private users!: User[];
    userSubject = new Subject<User[]>();

    private users: User[] = [
        new User('Steph', 'Alexander', 'Steph@Steph.com', 'jus d\'orange', ['coder', 'boire du café'])
    ];

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}