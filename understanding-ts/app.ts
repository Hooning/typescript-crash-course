// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     // Tuple: special array with two values first as number and second as string
//     role: [number, string];
// } = {
//     name: 'Hoon',
//     age: 35,
//     hobbies: ['sports', 'cooking'],
//     role: [1, 'author']  
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum ROLE { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Hoon',
    age: 35,
    hobbies: ['sports', 'cooking'],
    role: ROLE.ADMIN
};

// person.role.push('hello');
// person.role[1] = 'me';

let favoriteActivities: string[];
favoriteActivities = ['golf', 'soccer'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    
}
