console.log("-- Function Architecture and Scope --");


function rectangleArea(length = 5, width = 4) {
    return length * width;
}

console.log(
    "Standard Function Area (Default 5x4):",
    rectangleArea()
);


const arrowRectangleArea = (length = 5, width = 4) => {
    return length * width;
};

console.log(
    "Arrow Function Area (Custom 10x3):",
    arrowRectangleArea(10, 3)
);


function scopeTest() {
    var functionVar = "I am inside the function";
    console.log("Function Scope:", functionVar);
}

scopeTest();


{
    let blockVar = "I am inside the block";
    console.log("Inside Block:", blockVar);
}


try {
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error:", error.toString());
}
