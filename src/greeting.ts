export function greeting(names) {
  console.log(`Hello, ${names.map((name) => name.toLowerCase()).join(', ')}!`);
}
