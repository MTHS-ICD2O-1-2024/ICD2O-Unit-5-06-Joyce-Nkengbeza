// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Mar 2025
// This file contains the JS functions for index.html

'use strict'

function calculate() {
  // input
  const age = document.getElementById("age").value;
  const tuesday = document.getElementById("tuesday").checked;
  const thursday = document.getElementById("thursday").checked;

  // process
    if (tuesday || thursday || (age >= 12 && age <=21)) {
    // output
    document.getElementById("results").innerHTML =
      "<p>You can recieve a student discount.</p>";
  }

  else {
    document.getElementById("results").innerHTML =
      "<p>You have to pay regular price.</p>";
  }
}
