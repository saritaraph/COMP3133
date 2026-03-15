let greeter = (firstName: string, lastName: string): string => {
    return `Hello, ${firstName} ${lastName}`;
};

let firstName: string = "John";
let lastName: string = "Smith";

console.log(greeter(firstName, lastName));