//! Object Literals
// Used store keyed collections & complex entities

const student = {
  name: "Aditya",
  age: 19,
  marks: 72,
};

const item = {
  price: 100,
  discount: 30,
  colors: ["red", "green", "blue"],
};

// Example

const post = {
  username: "@adityatile45",
  content: "i post software related content",
  likes: 300,
  repost: 20,
  tags: ["@rushi_rajapure", "@google"],
};
console.log(post);

//! Get Values
post["content"]; // to handle specific key in object
post.content;

// JS automatically converts objects key to strings
// Even if we made the number as the key, the number will be converted to string

let obj = {
  1: "one",
  2: "two",
  3: "three",
  null: 4,
  undefined: 5,
  true: 6,
};
console.log(obj);
