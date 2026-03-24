#### 1) What is the difference between var, let, and const?
| Terms | var | let | const |
|----|------|-------|-------|
| Value assign | legacy way of declaring variable | can be reassigned with a new value | can not be reassigned with a new value |
| Scope | Scope Specific (portion of code within a function or global scope) | block specific (portion of code within curly braces {} [e.g., inside a function, loop, or conditional statement] ) | block specific | 

---
#### 2) What is the difference between map(), forEach(), and filter()? 
- **map :** call a defined callback function on each element of an array and returns a new array that contains the result - without modifying the original one. 

- **foreach :** call a defined callback function on each element of an array but do not return any result.

- **filter :** call a defined callback function on each element of an array and filter them based on a condition and return a new array where the callback returns true.

---
#### 3) What are arrow functions in ES6?
Concise syntax for writing functions through function expression was introduced in ES6 (ES2015). They use the => (fat arrow) operator.

---
#### 4) How does destructuring assignment work in ES6?
- **Extract values from objects or arrays into distinct variables.**
  - ***Array:***
    - `const [price, name, quantity] = ['t-shirt', 500, 7];`
  - ***Object:***
    - `const {price, name, quantity} = { name: 't-shirt', price: '500', quantity: 7 };`
  - ***These all price, name, and quantities creates a distinct variable and store the respective value from the array or object.***

---
#### 5) Explain template literals in ES6. How are they different from string concatenation?

**Template Literals :** Declare a string with the backtick(``)sign. 

**Different Table**
| Feature | String Concatenation | Template Literals | 
| ------- | -------------------- | ----------------- |
| Syntax | Single/Double quotes & need (+) operator | Only Backticks (`) |
| Expression | Not Supported | ${} | 
| Multi-line | Requires \n or multiple string | Native Support |
| Readability | less readable | More readable |  

---
## 🔗 Submission
- **Live Link :** [Live Link](https://green-earth-89i.pages.dev/)  
- **GitHub Private Repository:** [Repository Link](https://github.com/CodePoint-46615/Green-Earth.git)  
---