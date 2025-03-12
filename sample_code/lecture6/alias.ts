type User = {
  name: string; //name是属性
  age: number;
};

type Admin = User & {
  role: string;
};

let admin1: Admin = {
  name: 'Aaron',
  role: 'admin',
  age: 99
};

// type User = {
//     printName?: () => void;
// }
