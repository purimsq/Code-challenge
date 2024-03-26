# Code-challenge
26 March 2024

By Dylen Muiruri
This document was created with Javascript

Description
This was a code challenge comprised of 3 different tasks, the scripting of:-

A student grade generator
Which was about writing a program that prompts the user to input student marks, after which it calculates the correct grade to be issued to the student. 
const marksInput = parseInt(prompt("Input student marks? "));

// marksInput = 50
We prompt the user then we evaluate the entry
grader(marksInput);

// students grade = C
A speed detector
Here i was to script a program that evaluates the speed of a car.
And a net salary calculator.
Here i was to script a program that calculates the net salary of an employee according to the guidlines issued while calculating NHIF, NSSF and PAYE.
Built With
Node.js
Javascript
Development

To fix a bug or enhance an existing module, follow these steps:

Fork the repository
 https://github.com/purimsq/week-one-code-challenge/fork
Create a new branch
 git checkout -b improve-feature
Make the appropriate changes in the files
Add changes to reflect the changes made
Commit your changes
 git commit -am 'Improve feature'
Push to the branch
 git push origin improve-feature
Create a Pull Request
Setup/ Installation Requirements
To clone this repository to your machine do this in the root directory of where you would like to save the project. Before using this be sure which url link you should use, is it for HTTP or ssh.
  26 March 2024

By Dylen Muiruri
This document was created with Javascript

Description
This was a code challenge comprised of 3 different tasks, the scripting of:-

A student grade generator
Which was about writing a program that prompts the user to input student marks, after which it calculates the correct grade to be issued to the student. 
const marksInput = parseInt(prompt("Input student marks? "));

// marksInput = 50
We prompt the user then we evaluate the entry
grader(marksInput);

// students grade = C
A speed detector
Here i was to script a program that evaluates the speed of a car.
And a net salary calculator.
Here i was to script a program that calculates the net salary of an employee according to the guidlines issued while calculating NHIF, NSSF and PAYE.
>how are we going on so far???
Built With
Node.js
Javascript
Development

To fix a bug or enhance an existing module, follow these steps:

Fork the repository
 
let prompt = require("prompt-sync")({sigint: true});
let div = "------\n";

console.log("PAYE CALCULATOR\n" + div);

// PAYE is rated in accordance with the payment period whether monthly or yearly.
let paymentPeriod = (prompt("Respond with the word \"month\" or \"year\" to determine your payment period: ")).toLowerCase();
console.log(div);

// Gross Salary is the total amount of money an employee receive annually, we collect it to aid with the net pay calculations.
let grossSalary = parseInt(prompt("Input your gross salary: "));

// NATIONAL INSURANCE HOSPITAL FUND RATES
function n_h_i_f_ratings(gross){
  let output;

  if(gross >= 100000){
    output = 1700;
  }else if(gross >= 90000 && gross <= 99999){
    output = 1600;
  }else if(gross >= 80000 && gross <= 89999){
    output = 1500;
  }else if(gross >= 70000 && gross <= 79999){
    output = 1400;
  }else if(gross >= 60000 && gross <= 69999){
    output = 1300;
  }else if(gross >= 50000 && gross <= 59999){
    output = 1200;
  }else if(gross >= 45000 && gross <= 49999){
    output = 1100;
  }else if(gross >= 40000 && gross <= 44999){
    output = 1000;
  }else if(gross >= 35000 && gross <= 39999){
    output = 950;
  }else if(gross >= 30000 && gross <= 34999){
    output = 900;
  }else if(gross >= 25000 && gross <= 29999){
    output = 850;
  }else if(gross >= 20000 && gross <= 29999){
    output = 750;
  }else if(gross >= 15000 && gross <= 19999){
    output = 600;
  }else if(gross >= 12000 && gross <= 14999){
    output = 500;
  }else if(gross >= 8000 && gross <= 11999){
    output = 400;
  }else if(gross >= 6000 && gross <= 7999){
    output = 300;
  }else if(gross >= 0 && gross <= 5999){
    output = 150;
  };

  return output;
};

// PAY AS YOU EARN RATES
function p_a_y_e_ratings(gross){
  let output;

  if(paymentPeriod === "month"){
    if(gross >= 0 && gross <= 24000){
      output = (gross * 0.1);
    }else if(gross >= 24001 && gross <= 32333){
      output = (gross * 0.25);
    }else if(gross >= 32334 && gross <= 500000){
      output = (gross * 0.3);
    }else if(gross >= 500000 && gross <= 800000){
      output = (gross * 0.325);
    }else if(gross > 800000){
      output = (gross * 0.35);
    }
  }else if(paymentPeriod === "year"){
    if(gross >= 0 && gross <= 288000){
      output = (gross * 0.1);
    }else if(gross >= 288001 && gross <= 388000){
      output = (gross * 0.25);
    }else if(gross >= 388001 && gross <= 6000000){
      output = (gross * 0.3);
    }else if(gross >= 6000001 && gross <= 9600000){
      output = (gross * 0.325);
    }else if(gross > 9600000){
      output = (gross * 0.35);
    }
  };

  return output;
};

// NATIONAL SOCIAL SECURITY FUND RATES
function n_s_s_f_ratings(gross){
  /*
  my understanding was that NSSF = 6% of the gross salary, i am not sure whether this was the right approach, i wasn't able to understand the logic behind the tier table at this link ~ https://www.aren.co.ke/payroll/taxrates.htm you provided us.
  */
  return (gross * 0.06);
};

function netSalary(){
  let output;

  let grossRef = Gross Salary = ${grossSalary};
  let n_s_s_f_Ref = NSSF (Employee) = ${n_s_s_f_ratings(grossSalary)};
  let p_a_y_e_Ref = PAYE = ${p_a_y_e_ratings(grossSalary)};
  let n_h_i_f_Ref = NHIF = ${n_h_i_f_ratings(grossSalary)};
  let deductions = (n_s_s_f_ratings(grossSalary) + p_a_y_e_ratings(grossSalary) + n_h_i_f_ratings(grossSalary));
  let netPay = Net pay = ${(grossSalary - deductions)};

  output = ${grossRef}\n${n_s_s_f_Ref}\n${p_a_y_e_Ref}\n${n_h_i_f_Ref}\n\n${netPay};

  return div + output;
};

let result = netSalary();

console.log(result);
Create a new branch
 git checkout -b improve-feature
Make the appropriate changes in the files
Add changes to reflect the changes made
Commit your changes
 git commit -am 'Improve feature'
Push to the branch
 git push origin improve-feature
Create a Pull Request
Setup/ Installation Requirements
To clone this repository to your machine do this in the root directory of where you would like to save the project. Before using this be sure which url link you should use, is it for HTTP or ssh.
26 March 2024

By Dylen Muiruri
This document was created with Javascript

### Description

This was a code challenge comprised of 3 different tasks, the scripting of:-

A student grade generator
Which was about writing a program that prompts the user to input student marks, after which it calculates the correct grade to be issued to the student. 
const marksInput = parseInt(prompt("Input student marks? "));

// marksInput = 50
We prompt the user then we evaluate the entry
grader(marksInput);

// students grade = C
A speed detector
Here i was to script a program that evaluates the speed of a car.
And a net salary calculator.
Here i was to script a program that calculates the net salary of an employee according to the guidlines issued while calculating NHIF, NSSF and PAYE.
>need any help so far??
Built With
Node.js
Javascript
Development
Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

Fork the repository
 https://github.com/purimsq/week-code-challenge/fork
Create a new branch
 git checkout -b improve-feature
Make the appropriate changes in the files
Add changes to reflect the changes made
Commit your changes
 git commit -am 'Improve feature'
Push to the branch
 git push origin improve-feature
Create a Pull Request
Setup/ Installation Requirements
To clone this repository to your machine do this in the root directory of where you would like to save the project. Before using this be sure which url link you should use, is it for HTTP or shh.
  git clone https://github.com/purimsq/week-one-code-challenge.git
Open the repository.
  cd week-one--code-challenge
Installation Medium
Steady Network.
Web-link
Github account.
Bug / Feature Request
If you find a bug that gave undesired results, kindly open an issue here.
<br>

## Setup/ Installation Requirements
- To clone this repository to your machine do this in the root directory of where you would like to save the project. Before using this be sure which url link you should use, is it for HTTP or shh.

    ```
    git clone https://github.com/purimsq/code-challenge.git
    ```

- Open the repository.

    ```
    cd code-challenge
    ```

<p><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=purimsq&show_icons=true&locale=en&layout=compact" alt="Image showcasing the site author's github status on top languages used" /></p>

### TECHNOLOGIES USED

 *Node.js

 *Github
 


Support and contact details
Email - dylengitaka@gmail.com
License
The content of this site is licensed under the MIT license
Copyright (c) 2023.


Open the repository.
  cd week-one-code-challenge
Installation Medium
Steady Network.
Web-link
Github account.
Bug / Feature Request
If you find a bug that gave undesired results, kindly open an issue here.
<br>