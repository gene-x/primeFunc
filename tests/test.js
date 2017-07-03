const assert = require('chai').assert;
const myApp = require('../src/primeFunc.js')

describe("Prime Number", function() {

	describe("handle valid input", function() {
			it("should return [2, 3, 5, 7, 11, 13]", function() {
				assert.equal(myApp.primeFunc(13), [2, 3, 5, 7, 11, 13]);
			});

	describe("handle valid input", function() {
			it("should return [2]", function() {
				assert.equal(myApp.primeFunc(2), [2]);
			});

	describe("handle valid input", function() {
			it("should return [2, 3]", function() {
				assert.equal(myApp.primeFunc(3), [2, 3]);
			});

	describe("handle valid input", function() {
			it("should return [2, 3, 5]", function() {
				assert.equal(myApp.primeFunc(5), [2, 3, 5]);
			});

	describe("handle valid input", function() {
			it("should return [2, 3, 5, 7]", function() {
				assert.equal(myApp.primeFunc(7), [2, 3, 5, 7]);
			});
	})

	describe("handle invalid input", function() {
		it("should return undefined as prime Number array for 0", function() {
			assert.equal(myApp.primeFunc(0), 'undefined');
		});

	describe("handle invalid input", function() {
		it("should return undefined as prime Number array for 'Seven'", function() {
			assert.equal(myApp.primeFunc("Seven"), 'undefined');
		});

	describe("handle invalid input", function() {
		it("should return undefined as prime Number array for 'Five'", function() {
			assert.equal(myApp.primeFunc("Five"), 'undefined');
		});

	describe("handle invalid input", function() {
		it("should return undefined as prime Number array for 'Three'", function() {
			assert.equal(myApp.primeFunc("Three"), 'undefined');
		});

	describe("handle invalid input", function() {
		it("should return undefined as prime Number array for 'Thirteen'", function() {
			assert.equal(myApp.primeFunc("Thirteen"), 'undefined');
		});
	}) 
})