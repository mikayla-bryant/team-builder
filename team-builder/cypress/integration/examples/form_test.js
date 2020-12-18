//arrange
describe('My First Test', function () {
  //act
  it('Does not do much', function () {
    //assert
    expect(true).to.equal(true);
  });
});

describe('My Second Test', function () {
  //Arrange
  it('Visits a new site', function () {
    // Act
    cy.visit('./public/index.html');
  });
});
