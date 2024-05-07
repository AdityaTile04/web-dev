//! Array Methods

//! 1.push method
// add to end

// Example 1
let cars = ["audi", "bmw", "maruti", "mahindra"];
let addCar = cars.push("toyota");
console.log(cars);

// Exapmple 2
let friends = ["Aditya", "Saurabh", "Rushi", "Kunal"];
let addFriends = friends.push("Vishal");
console.log(friends);

// Example 3
let info = ["Aditya", 70, 8.5];
let addInfo = info.push("A");
console.log(info);

//! 2.pop method
// delete from end & return it

// Example 1
let companies = ["Facebook", "Microsoft", "Adobe", "JP Morgan", "Netflix"];
let delComp = companies.pop();
console.log(companies);

// Exapmle 2
let fruits = ["Mango", "Apple", "Grapes", "Orange", "Papaya"];
let delFru = fruits.pop();
console.log(fruits);

// Example 3
let numbers = [10, 20, 30, 40, 50, 60];
let detNum = numbers.pop();
console.log(numbers);

//! 3.unshift method
// add to start

// Example 1
let names = ["Aditya", "Gaurav", "Kunal"];
let addName = names.unshift("Nikhil");
console.log(names);

// Exapmle 2
let brands = ["Samsung", "Vivo", "Oneplus"];
let addBrand = brands.unshift("Apple");
console.log(brands);

// Example 3
let nums = [40, 60, 80, 100];
let addNum = nums.unshift(20);
console.log(nums);

//! 4.shift method
// delete from start & return it

// Example 1
let subjects = ["Maths", "Physics", "Boilogy", "Chemitry"];
let delSub = subjects.shift();
console.log(subjects);
console.log(delSub);

// Example 2
let followers = ["a", "b", "c", "d"];
let delFoll = followers.shift();
console.log(followers);
console.log(delFoll);

// Example 3
let animals = ["Tiger", "Lion", "Elephant"];
let delAni = animals.shift();
console.log(animals);
console.log(delAni);

//! 5.indexOf method
// Return index of something

// Example 1
let primary = ["red", "green", "blue"];
let find = primary.indexOf("blue");
console.log(find);

// Example 2
let marks = [90, 50, 70, 60, 80, 100];
let fIndex = marks.indexOf(100);
console.log(fIndex);

// Example 3
let games = ["Cricket", "Football", "Carrom", "Golf", "Baseball", "Hockey"];
let fGames = games.indexOf("Hockey");
console.log(fGames);

//! includes method
// Search for a value

// Exapmle 1
let languages = ["English", "Hindi", "Marathi", "Tamil"];
let lang = languages.includes("Marathi");
console.log(lang);

// Examle 2
let branches = ["Computer", "IT", "Electrical", "AIDS", "Mechanical"];
let branch = branches.includes("IT");
console.log(branch);

//! Concatenation & Reverse

//! 1.concat method
// merge two array

// Example 1
let color1 = ["Red", "Green", "Blue"];
let color2 = ["Yellow", "Orange", "Purple"];
let merge = color1.concat(color2);
console.log(merge);

// Example 2
let players = ["Virat", "Rohit", "Rahul", "Mahindra"];
let playerNumbers = [18, 45, 1, 7];
let mergeNum = players.concat(playerNumbers);
console.log(mergeNum);

// Example 3
let meta = ["facebook", "Instagram", "Whatsapp"];
let maang = ["Microsoft", "Apple", "Adobe", "Netflix", "Google"];
let mergeGroup = meta.concat(maang);
console.log(mergeGroup);

//! 2.reverse method
// Reverse an Array

// Example 1
let array = ["Aditya", "Tile"];
let rev = array.reverse();
console.log(rev);

// Example 2
let number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let revNum = number.reverse();
console.log(revNum);

//! Slice Method
// Copies a portion of an array

// Exapmle 1
let carBrands = ["audi", "bmw", "wolkswagon", "toyota"];
console.log(carBrands.slice(1));
console.log(carBrands.slice(1, 3));
console.log(carBrands.slice(-1));

// Example 2
let heroName = ["Siddharth", "Vicky", "Sushant", "Varun"];
console.log(heroName.slice(1));
console.log(heroName.slice(0, 3));
console.log(heroName.slice(-2));

// Example 3
let movies = ["Endgame", "Infinity War", "The Dark Knight", "Intersteller"];
console.log(movies.slice(2));
console.log(movies.slice(1, 3));
console.log(movies.slice(-1));
