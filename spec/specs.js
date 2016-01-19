describe('encode', function(message) {
  it("it will create the width", function() {
    expect(encode("aaaaaaaaaaaaaaaa")).to.equal(4);
  });

});
