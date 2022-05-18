const { sum, getfruits, getDailyFortune } = require("../util/maths");

// AAA Pattern -> 
// Arrange : arrange the resources
// Act : action; making the function call; creating the objects etc
// Assert : actual test; expect 'something' against standard
// TDD : Test Driven Development -> Write Test, make them fail, write the code, test succeed

test("Should have 'lucky day' in result", ()=>{
    let result = '';
    result = getDailyFortune()
    expect(result).toMatch(/lucky day/)
})

test("Should return fruits as array", () => {
    let fruits = [];
    fruits = getfruits()
    // expect(fruits).toContain("apple")
    expect(fruits).not.toHaveLength(0)
})

test("Should return the sum as '4'", () => {
    // Arrange
    let result;
    // Act
    result = sum(2,2);
    // Assert
    expect(result).toEqual(4)
})

test("Should be truthy", () => {
    expect(true).toBeTruthy()
})