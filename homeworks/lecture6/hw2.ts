interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: "Aaron",
    age: 99,
    occupation: "TypeScript Developer",
  },
  {
    name: "Alex",
    age: 98,
    role: "System Administrator",
  },
];

// fix the error showing in the following code:
function isAdmin(person: Person): person is Admin {
  return (person as Admin).role !== undefined;
}

function logPerson(person: Person) {
  let additionalInformation: string;

  if (isAdmin(person)) {  // Type guard usage
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }

  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
