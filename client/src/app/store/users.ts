export const Users: User[] =  [
    {
        "email": "amrit.moomie@comsenseinc.com",
        "name": "Amrit",
        "password": "comsense1;;",
        "userId": 1
    },
    {
        "email": "Mark.Comeau@comsenseinc.com",
        "name": "Mark.Comeau",
        "password": "comsense1;;",
        "userId": 2
    },
    {
        "email": "arash.sabet@comsenseinc.com",
        "name": "Arash",
        "password": "comsense1;;",
        "userId": 3
    },
    {
        "email": "wiebo@binaryops.ca",
        "name": "Wiebo",
        "password": "comsense1;;",
        "userId": 4
    },
    {
        "email": "mark@binaryops.ca",
        "name": "Mark.Voorberg",
        "password": "comsense1;;",
        "userId": 5
    },

];

export interface User {
    email: string;
    name: string;
    password: string;
    userId: number;
}