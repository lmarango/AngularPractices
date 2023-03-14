const username: string = 'lmarango';

const sum = (a: number, b:number) => {
  return a+b;
}

sum(1,4);

class Person{
  constructor(private age: number, private lastName: string){  }
}

const luis = new Person(22,'Arango')
