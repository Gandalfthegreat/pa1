import { parse } from './parser';
const ast = parse("pow(1,2)");
console.log(JSON.stringify(ast, null, 2))