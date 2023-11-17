// specially on callback stuffs

function fizz<T>(arr: T[], callback: (arg: T) => void): void {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

let total = 0;

const buzz = fizz<number>([1, 2, 3, 4], (elements) => {
  total += elements;
});

// capitalize array
function capitalizeString(arr: string[], callback: (str: string) => void) {
  const capitalizeArr = arr.map((str) => callback(str));
  return capitalizeArr;
}

const strings = ["hello", "world", "typescript"];
const capitalizedStrings = capitalizeString(strings, (str) =>
  str.toUpperCase()
);
console.log("capitalizedStrings is", capitalizedStrings);

// sum of even numbers
function sumOfEvenNumbers(arr: number[], callback: (arg: number) => boolean) {
  const evenNumbers = arr.filter((num) => callback(num));
  const sum = evenNumbers.reduce((acc, num) => acc + num, 0);
  return sum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = sumOfEvenNumbers(numbers, (num) => num % 2 === 0);
// console.log("sum is", sum);

type Person = { [key: string]: unknown };
function removeDuplicateObject(arr: Person[], callback: (obj: Person) => void) {
  const uniqueObjects: Person[] = [];
  const seenKeys = new Set();

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    const key = callback(obj);
    if (!seenKeys.has(key)) {
      uniqueObjects.push(obj);
      seenKeys.add(key);
    }
  }
  return uniqueObjects;
}

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 25 },
  { name: "Alice", age: 35 },
];

const uniquePeople = removeDuplicateObject(people, (obj) => obj.name);

console.log("uniquePeople is", uniquePeople);

const data = {
  data: {
    getQuestions: [
      {
        id: "14160833-920d-4b4f-a1a8-6b7642099fc5",
        question: "The riyan stuff stuff",
        answer: "The Riyan stuff",
        isPublished: false,
        categoryId: null,
      },
      {
        id: "143dfa22-5659-43f0-a915-75fbfe917df4",
        question: "The random stuff",
        answer: "The random stuff",
        isPublished: false,
        categoryId: null,
      },
      {
        id: "9a0c7afc-444f-42d8-b27a-13ff6b4c6ccc",
        question: "React - questuion graphql reuqest test",
        answer: "The graphql test",
        isPublished: true,
        categoryId: null,
      },
      {
        id: "d8b700a6-25c0-41f0-929a-5d6778fe2a63",
        question: "What is Domestic animals ?",
        answer: "Cow ,Goat ,Dog , Hen, Rabbit,Horse,Donkey,Buffalo",
        isPublished: true,
        categoryId: null,
      },
    ],
  },
};

interface IGetQuestions {
  id: string;
  question: string;
  answer: string;
  isPublished: boolean;
  categoryId: null;
}
interface IQuestion {
  data: {
    getQuestions: IGetQuestions[];
  };
}
function countPublishedData(data: IQuestion) {
  const questions = data.data.getQuestions;
  return questions.reduce((count, question) => {
    if (question.isPublished) {
      count += 1;
    }
    return count;
  }, 0);
}

const count = countPublishedData(data);
console.log("count is", count);
