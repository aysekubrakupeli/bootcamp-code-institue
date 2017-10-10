describe("whatCanIDrink", function() {
    it("Should return 'sorry blah blah blah'", function () {
        expect(whatCanIDrink(-1)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
    });
    it("Should return 'The age before 14'", function () {
        expect(whatCanIDrink(10)).toBe("Drink Toddy");
    });
    it("Should return 'We got a bit older'", function(){
       expect(whatCanIDrink(17)).toBe("Drink Coke"); 
    });
    it("Should return 'Reached the age'", function(){
       expect(whatCanIDrink(20)).toBe("Drink Beer"); 
    });
    it("Should return 'Finally reached the legal age!'", function(){
       expect(whatCanIDrink(55)).toBe("Drink Whisky"); 
    });
    it("Should return 'What weird age are you?'", function(){
       expect(whatCanIDrink(501)).toBe("Sorry. I can't tell what drink because that age is incorrect!"); 
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
