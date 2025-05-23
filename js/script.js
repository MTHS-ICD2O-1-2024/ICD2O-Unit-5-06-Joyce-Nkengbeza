// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

// Load saved input values when page loads
function loadSavedInputs() {
  const savedNumberOne = localStorage.getItem("numberone")
  const savedNumberTwo = localStorage.getItem("numbertwo")

  if (savedNumberOne !== null) {
    document.getElementById("numberone").value = savedNumberOne
  }

  if (savedNumberTwo !== null) {
    document.getElementById("numbertwo").value = savedNumberTwo
  }
}

function calculate() {
  // input
  const firstNumberInput = document.getElementById("numberone").value
  const secondNumberInput = document.getElementById("numbertwo").value

  // Save inputs
  localStorage.setItem("numberone", firstNumberInput)
  localStorage.setItem("numbertwo", secondNumberInput)

  let firstNumber = parseFloat(firstNumberInput)
  const secondNumber = parseFloat(secondNumberInput)
  let answer = 0

  // process
  while (firstNumber >= 1) {
    answer = answer + secondNumber
    firstNumber = firstNumber - 1
  }

  // output
  document.getElementById("results").innerHTML =
    'The number is: ' + answer
}