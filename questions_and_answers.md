<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>From the Given Code Segment we see that in Line 1 we declear a variable by using let variable. Then in line 2 greetign is assign by an emty object. Then in line 3 we console.log the greetign variable. There we console the greetign immediate after we assign the emptpy object. So, The right answer will be an empty object Which is option A.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>There are given a fuction called sum(). It receive two parameter. In the question we can see that the sum function pass one integer number (1) & one string ("2"). As the two parameters are two types so they will be concatenate with each other. Therefore the result will be 12 as string. So, the answer is: "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>From the question we can see that, we are given one array (food) and one object (info). In the code segment the output/console.log is the array variable (food). In the question the array haven't used for any operation. So, output/answer is as it given in the question. The answer is option A. </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>In the question we can see that, we are given a function called sayHi which receive one parameter called name. It returns some string & the receving parameter. But in the console.log we didn't pass any parameter. So, our function will return the string part & for the function parameter part it will show undefined. So, the answer is option: B. </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The question is given one variable (count) & one array (nums). Then use for to access every element of nums array. Whenever we access any element of nums array we add 1 to count variable. As the 1st element of nums array is Zero (0) so the count will be 3. So, the answer is Option C (3). </i>

</p>
</details>