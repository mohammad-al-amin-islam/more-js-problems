function areaOfTriangle(a, b, c) {
    let s = a + b + c;
    let area =Math.sqrt((s*(s-a)*(s-b)*(s-c)));
    return area;
}
const area = areaOfTriangle(4,5,6);
console.log(area);