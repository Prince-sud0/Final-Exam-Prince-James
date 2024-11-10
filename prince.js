//Part 1: Class and Objects
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updatePrice(newPrice) {
        this.price = newPrice;

    }

    sellProduct(quantity) {
        if (quantity > this.quantity) {
            return "Quantity = " + "Not enough stock";
        }

        this.quantity -= quantity;
        return "Total Stock Price = " + quantity * this.price;
    }

    restockProduct(quantity) {
        this.quantity += quantity;

    }
}
const product1 = new Product("Television", 859, 16);
console.log(product1);

product1.updatePrice(1092);
console.log(product1);

const saleAmount = product1.sellProduct(4);
console.log(saleAmount);
console.log(product1);

product1.restockProduct(12);
console.log(product1);

//Part 2: Arrays & Sets 
//Question 2
function findUniqueWords(words) {
    const uniqueWordsSet = new Set(words);
    return [...uniqueWordsSet];
}

const words = ["Mango", "Pear", "Mango", "orange", "Pear", "Strawberry", "Avocado"];
const uniqueWords = findUniqueWords(words);
console.log(uniqueWords);

//Question 3
function commonElements(array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);

    const intersection = new Set([...set1].filter(x => set2.has(x)));

    return [...intersection];
}

const array1 = [51, 52, 53, 54, 34];
const array2 = [34, 54, 65, 86, 77];

const common = commonElements(array1, array2);
console.log(common);

//Part 3: Maps
class StudentGrades {
    constructor() {
        this.grades = new Map();
    }

    addGrade(studentName, grade) {
        this.grades.set(studentName, grade);
    }

    getGrade(studentName) {
        return this.grades.get(studentName);
    }

    updateGrade(studentName, newGrade) {
        if (this.grades.has(studentName)) {
            this.grades.set(studentName, newGrade);
        } else {
            console.log("Student not found.");
        }
    }

    removeStudent(studentName) {
        this.grades.delete(studentName);
    }
}
const grades = new StudentGrades();

grades.addGrade("Zanelle", 95);
grades.addGrade("Prince", 88);
grades.addGrade("Zina", 97);
grades.addGrade("John", 91);

console.log(grades.getGrade("Prince"));

grades.updateGrade("Zanelle", 98);
console.log(grades.getGrade("Zanelle"));

console.log(grades.getGrade("Zina"));

grades.removeStudent("John");
console.log(grades.getGrade("John"));

//Part 4: Cybersecurity

function validatePassword(password) {
    const specialCharsRegex = /[!@#$%^&?*()_+-=[]/;

    return password.length >= 8 && specialCharsRegex.test(password);
}

const password1 = "pass123";
const password2 = "Password@123";

console.log(validatePassword(password1));
console.log(validatePassword(password2));