import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Given('I have the following books in the store', function (dataTable) {
    console.log(dataTable.hashes());
});

When('I search for books by author {string}', function (author: string) {
    let authorlocal, count = 0; 
 // for (authorlocal of dataTable.rows()) {
  //  if (authorlocal === ){
  //      count++;

    //    console.log(`${count}st Book found with author: ${authour} - Book title:  ` + author);
    //}  }  
});

Then('I find {int} books', function (expectedCount: number) {
    expect(expectedCount).to.equal(2);
   
});

