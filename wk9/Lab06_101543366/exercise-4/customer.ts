export class Customer {

    private _firstName: string;
    private _lastName: string;
    private _age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    greeter() {
        console.log(`Hello ${this._firstName} ${this._lastName}`);
    }

    GetAge(): number {
        console.log(`Age: ${this._age}`);
        return this._age;
    }
}