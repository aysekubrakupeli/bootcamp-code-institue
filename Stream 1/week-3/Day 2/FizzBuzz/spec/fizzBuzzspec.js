describe("fizzBuzz", function() {
    it("Should return 'Both are working'", function () {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    it("Should return 'Only the 3 is working'", function () {
        expect(fizzBuzz(9)).toBe("Fizz");
    });
    it("Should return 'Only the 5 is working'", function () {
        expect(fizzBuzz(10)).toBe("Buzz");
    });
    
});
    
// Template Jasmin function
// -----------------------------------------------
// describe('Put description here', function() {
//     it('say what it should do', function() {
//         expect(OUR_FUNCTION()).toBe(result);
//     });
// });
// -----------------------------------------------
