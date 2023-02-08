function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function potentiation(a, b) {
  return a ** b;
}

function squareRoot(a) {
  return [a ** 0.5 * 1, a ** 0.5 * -1];
}

function operationInsideSquareRoot(a, b, c) {
  return potentiation(b, 2) - 4 * multiplication(a, c);
}

function negativeB(a) {
  return -a;
}

function operationAbovePart(a, b, c) {
  return negativeB(a), squareRoot(operationInsideSquareRoot(a, b, c));
}

function bhaskara(a, b, c) {
  let result = operationInsideSquareRoot(a, b, c);
  if (result < 0) {
    //document.getElementById("mainerror").innerHTML = "tchau"; I could treat this error here, but, it'd better in that other function.
    return; // it means: don't follow to the next line in this case!
  }
  return [
    division(
      addition(negativeB(b), squareRoot(result)[0]),
      multiplication(2, a)
    ),
    division(
      addition(negativeB(b), squareRoot(result)[1]),
      multiplication(2, a)
    ),
  ];
}

function validateOnSubmit(form) {
  form.result.value = "";
  document.getElementById("mainerror").innerHTML = "";

  if (!(form.a.value, form.b.value, form.c.value)) {
    document.getElementById("mainerror").innerHTML =
      "You have to assing numbers before submit it!";
    return false;
  }
  let inputA = parseInt(form.a.value, 10);
  let inputB = parseInt(form.b.value, 10);
  let inputC = parseInt(form.c.value, 10);

  if (inputA === 0) {
    document.getElementById("mainerror").innerHTML = '"a" can not be zero.';
    return false;
  }

  let result = bhaskara(inputA, inputB, inputC);

  if (!result) {
    //(result == undefined) This two ways to write have the same meaning, checking if the calculation stopped in "result<0" in bhaskara and don't defined any value.
    //form.mainerror.value = "oi"; This do not work, since "mainerror is a div, and selecting "form" it takes only inputs.
    document.getElementById("mainerror").innerHTML =
      "These values result a negative number inside square root.\nIn this case, the final result will not be real.";

    //document.getElementById("result").innerHTML = "oi"; this code could be wrong, because "result" is an input and could not have innerHTML, maybe "value".
    return false; // it means: don't submit and don't refresh the page, since this is not the role to this exercise, I haven't inform in HTML file a destin in "<form action+"vazio".
  }
  console.log(result);
  // or: form.result.value = "Result: " + result[0] + " ," + result[1];
  form.result.value = `${result[0].toFixed(2)} and ${result[1].toFixed(2)}`; //form.result.value = "Result: " + result[0] + " ," + result[1]; This two ways to write have the same meaning.
  return false;
}

// let testBhaskara = bhaskara(2, 3, -2);
// console.log("Teste Bhaskara: ", testBhaskara);

///////////////////

/*function solve(a, b, c) {
  let resultAddition = addition(a, b);
  console.log("Addition: ", resultAddition);

  let resultSubtraction = subtraction(b, a);
  console.log("Subtraction: ", resultSubtraction);

  let resultMultiplication = multiplication(a, c);
  console.log("Multiplication: ", resultMultiplication);

  let resultMultiplicationOn = multiplication(a, c);
  console.log("Multiplication On: ", 4 * resultMultiplicationOn);

  let resultMultiplicationUnder = multiplication(a, 2);
  console.log("Multiplication Under: ", resultMultiplicationUnder);

  let resultDivision = division(b, a);
  console.log("Division: ", resultDivision);

  let resultPotentiation = potentiation(b, 2);
  console.log("Potentiation: ", resultPotentiation);

  let resultInsideSquareRoot = operationInsideSquareRoot(a, b, c);
  console.log("Result inside square root: ", resultInsideSquareRoot);

  let resultSquareRoot = squareRoot(resultInsideSquareRoot);
  console.log("Square Root: ", resultSquareRoot);

  let resultAbovePartPlus = addition(negativeB(b), resultSquareRoot[0]);
  console.log("First result above part: ", resultAbovePartPlus);

  let resultAbovePartMinus = addition(negativeB(b), resultSquareRoot[1]);
  console.log("Second result above part: ", resultAbovePartMinus);

  let FinalResultPlus = division(
    resultAbovePartPlus,
    resultMultiplicationUnder
  );
  console.log("Final result plus: ", FinalResultPlus);

  let FinalResultMinus = division(
    resultAbovePartMinus,
    resultMultiplicationUnder
  );
  console.log("Final result minus: ", FinalResultMinus);

  return [FinalResultPlus, FinalResultMinus];
}*/
