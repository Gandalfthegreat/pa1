import { parse } from './parser';
const ast = parse("abs(-1)");
console.log(JSON.stringify(ast, null, 2))