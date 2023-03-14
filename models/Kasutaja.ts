export class Toode {
    public id: number;
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public isActive: boolean;

    constructor(
        id: number,
        username: string,
        password: string,
        firstName: string,
        lastName: string,
        isActive: boolean
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isActive = isActive;
    }
}