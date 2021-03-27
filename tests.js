// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function () {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when caller', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return Hello, Jane!', function () {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should be return Hello, Alex!', function () {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should be return Hello, Pat!', function () {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should be return Hello, World when the passed an argument true', function () {
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should be return Hello, World! when the passed an argument false', function () {
        expect(sayHello(false)).toBe('Hello, World!');
    });
});
describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should be return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should be return 5 when passed a that number', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should be return true when passed a number in string', function () {
        expect(isFive('5')).toBe(true);
    });
});
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should be return a boolean when called', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should be return true when passed a number 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should be return false when passed a number -4', function () {
        expect(isEven(-4)).toBe(false);
    });
    it('should be return false when passed a number 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should be return false when passed "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should be return true when passed a number "8', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should be return false when passed a Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should be return false when called with a boolean ', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should be return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
});
describe('isVowel', function () {
    it('should be defined a function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should be return a boolean when called', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should be return true when called "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should be return true when called "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should be return false when called "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should be return false when called 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when called true', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when called "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should be return false when called without an argument', function () {
        expect(isVowel()).toBe(false);
    });
});
describe('add', function () {
    it('should be define a function', function () {
        expect(typeof add).toBe('function');
    });
    it('should be return result between x + y', function () {
        expect(typeof add()).toBe('boolean');
    });
    it('should be return 5 when passed 2, 3', function () {
        expect(add(2,3)).toBe(5);
    });
    it('should be return -12 when passed -3, -9 ', function () {
        expect(add(-3,-9)).toBe(-12);
    });
    it('should be return 11 when passed "5", 6', function () {
        expect(add("5",6)).toBe(11);
    });
    it('should be return 6 when passed "-4", "10"', function () {
        expect(add("-4","10")).toBe(6);
    });
    it('should be return NaN when passed "banana", "split"', function () {
        expect(add("banana", "split")).toBe(true);
    });
    it('should be return NaN when passed 2, "apples"', function () {
        expect(add(2,"apples")).toBe(true);
    });
    it('should be return NaN when called without an argument', function () {
        expect(add()).toBe(true);
    });
});
    describe("addOne", function() {
    it('should be a defined function', function() {
        expect(typeof addOne).toBe("function");
    });
    it('should return a number when called', function() {
        expect(typeof addOne()).toBe('number');
    });
    it('should return the number 3 when passed the argument of the number 2', function() {
        expect(addOne(2)).toBe(3);
    });
    it("should return the number -43 when passed the argument of the number -44", function() {
        expect(addOne(-44)).toBe(-43);
    });
    it('should return the number 18 when passed the argument of the number 17', function() {
        expect(addOne(17)).toBe(18);
    });
    it("should return the number -2.14 when passed the argument of the number -3.14", function() {
        expect(addOne(-3.14)).toBe(-2.14);
    });
    it('should return the number 34 when passed the argument of the number 33', function() {
        expect(addOne(33)).toBe(34);
    });
    it("should return the number 4.58 when passed the argument of the number 3.58", function() {
        expect(addOne(3.58)).toBe(4.58);
    });
    it("should return NaN when passed the string 'Hakeem Olajuwon.'", function() {
        expect(Number.isNaN(addOne("Hakeem Olajuwon"))).toBe(true);
    });
    it("should return NaN when passed the boolean true", function() {
        expect(Number.isNaN(addOne(true))).toBe(true);
    });
    it("should return NaN when passed the array [1,2,3]", function() {
        expect(Number.isNaN(addOne([1,2,3]))).toBe(true);
    });
});




