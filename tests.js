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
    it('should be return Hello, when do not passed an argument', function () {
        expect(sayHello()).toBe('Hello, World!');
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
    it('should be return a number when called', function () {
        expect(typeof isFive()).toBe('number');
    });
    it('should be return 5 when passed a that number', function () {
        expect(isFive(5)).toBe(5);
    });
});
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should be return a number when called', function () {
        expect(typeof isEven()).toBe('number');
    });
});
    describe("addOne", function() {
    it('should be a defined function', function() {
        expect(typeof addOne).toBe("function");
    });
    it('should return a number when called', function() {
        expect(typeof addOne()).toBe("number");
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




