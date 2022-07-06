// Generic is a type that is flexible and connected to other type

// Generic type, type that is connected to other type - array connected to string
const names: Array<string> = []; // string[]

// Promise type
// promise that will yield string
const prom: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done")
    },2000)
})

// -----------------------

function merge1(objA: object, objB: object) {
    return Object.assign(objA, objB)
}

// Generics
// We dont know how it will look like, that why we use T and later in alphabetic orger
// objA and objB can and will be of different types. TS saprot ka dabūsim dažāda veida datus.
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedObject = merge({name: "Ricards"}, {age: 25})
// šādi varam norādīt kādi tad būs gala tipi
const mergedObject2 = merge<{name: string}, {age: number}>({name: "Ricards"}, {age: 25})

 // Contraints
// obj1 un obj2 jabut jebkāda veida objektam, tas ir contraint
// T type war but jebkas kas ir objekts
function merge3<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}