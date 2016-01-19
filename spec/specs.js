describe('encode', function(message) {
  it("add the right spaces", function() {
    expect(encode("abcdefghi")).to.equal("adgbe hcfi");
  });
});
