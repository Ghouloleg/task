function createUser(name, age) {
  return {
    name,
    age,
    address: {
      city: "Unknown"
    }
  };
}
const user = createUser("Аня", 25);
console.log(user);



function updateSettings(settings, theme) {
  return { ...settings, theme };
}
const currentSettings = { volume: 50 };
const updated = updateSettings(currentSettings, "light");
console.log(updated);




function createCounter() {
  return {
    count: 0,
    increment() {
      this.count++;
    }
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.count);




function ensureProperty(obj, key, defaultValue) {
  if (!(key in obj)) {
    obj[key] = defaultValue;
  }
  return obj;
}
const item = { title: "Книга" };
const updatedItem = ensureProperty(item, "status", "available");
console.log(updatedItem);




function printInventory(inventory) {
  for (const key in inventory) {
    console.log(`${key}: ${inventory[key]} шт.`);
  }
}

const stock = {
  apples: 10,
  bananas: 15
};
printInventory(stock);



function logValues(obj) {
  Object.values(obj).forEach(value => console.log(value));
}

const book = {
  title: "Война и мир",
  author: "Лев Толстой",
  year: 1865
};
logValues(book);





function cloneObject(obj) {
  const clone = {};
  Object.keys(obj).forEach(key => {
    clone[key] = obj[key];
  });
  return clone;
}
const original = { name: "Катя", age: 20 };
const cloned = cloneObject(original);
original.role = "student";
console.log(original);
console.log(cloned);


function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  return keys1.every(key => obj1[key] === obj2[key]);
}

const obj1 = { id: 1, name: "Товар" };
const obj2 = { id: 1, name: "Товар" };
const obj3 = { id: 1, name: "Другой" };
console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj1, obj3));


function updateCopy(source, newProp) {
  return { ...source, ...newProp };
}

const original = { title: "Блог", theme: "dark" };
const updated = updateCopy(original, { font: "Arial" });
updated.theme = "light";
console.log(updated);
console.log(original);



function deepCloneAndUpdate(obj, newColor) {
  const clone = structuredClone(obj);
  if (clone.style) {
    clone.style.color = newColor;
  }
  return clone;
}
const original = { name: "Страница", style: { color: "red" } };
const updated = deepCloneAndUpdate(original, "blue");
console.log(updated);
console.log(original);