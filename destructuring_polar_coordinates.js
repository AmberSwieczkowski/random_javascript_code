// Convert [x,y] coordinates to [r, theta] polar coordinates, rounded to two decimal places
const cartesian_to_polar = function toPolar(x = 1.0,y = 1.0) {
    const distance = Math.round(Math.sqrt(x**2+y**2)).toFixed(2);
    const radians = Math.round(Math.atan2(y,x)).toFixed(2);
    const polarCoor = {distance_r: distance, radians: radians};
    return polarCoor;
}

// Convert polar coordinates to Cartesian coordinates, rounded to two decimal places
const polar_to_cartesian = function toCartesian(r,theta) {
    const x_value = Math.round(r*Math.cos(theta)).toFixed(2);
    const y_value = Math.round(r*Math.sin(theta)).toFixed(2);
    const cartCoor = {x_value: x_value, y_value: y_value};
    return cartCoor;
}

console.log(cartesian_to_polar(2,4));
console.log(polar_to_cartesian(1, 3.14159))