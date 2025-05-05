// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Mar 2025
// This file contains the JS functions for index.html

'use strict'

function calculate() {

 // input
  let firstNumber = parseFloat(document.getElementById("numberone").value)
  const secondNumber = parseFloat(document.getElementById("numbertwo").value)
  let answer = 0

  // process
  while (firstNumber >= 1) {
    answer = answer + secondNumber
  firstNumber = firstNumber - 1;
  }
  // output
  document.getElementById("results").innerHTML =
  'The number is: ' + answer
}