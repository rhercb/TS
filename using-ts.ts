const number = 5; // Var nelikt const number: number = 5; jo TS saprot ka ir konstante un cipars, kas ir number type

// Objekta typošana
const product: {
    id: string;
    price: number;
    tags: string[];
    details: {
        title: string;
        description: string;
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}

// Tuple - fixed length and type array, kad zinam ka būs fiksēta garuma masīvs ar konkrētām zināmām vērtībām un to tipiem
const person1: {
    role: [number, string]
} = {
    role: [2, "author"]
}

// Enums - ciparots saraksts kur ir cilvēkam lasāmy leibļi, piemēram Active = 0/Archived = 1 var būt enum Status {Active, Archiver}
// Ar lielo burtu jo type
enum Status {NEW, OLD}

enum Role { ADMIN, READ_ONLY, AUTHOR}

// Var pārrakstīt vērtības
enum Role2 { ADMIN = 5, READ_ONLY, AUTHOR}
enum Role3 { ADMIN = 'AMDIN', READ_ONLY = 100, AUTHOR = 200}

const person2: {
    role: Role
} = {
    role: Role.ADMIN
}