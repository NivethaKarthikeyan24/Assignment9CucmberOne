import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Given('I have the following books in the store', function (dataTable) {
    console.log(dataTable.rows());
});

When('I search for a book with title {string}', function (title: string) {
   
});

Then('I should find the book with title {string}', function (title: string) {
    expect(this.result).to.not.be.undefined;
    expect(this.result.title).to.equal(title);
});

Then('I should not find any book', function () {
    expect(this.result).to.be.undefined;
});