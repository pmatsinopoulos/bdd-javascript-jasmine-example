describe('squeeze function', function () {
  context('when string is "Hello World!" and set of characters is "oe"', function () {
    var input = "Hello World!";
    var setOfCharacters = "oe";
    var result = "Hll Wrld!";

    it('should return "' + result + '"', function () {
      expect(squeeze(input, setOfCharacters)).toBe(result);
    });
  });


  context('when string is "Hello World!" and set of characters is "oE"', function () {
    var input = "Hello World!";
    var setOfCharacters = "oE";
    var result = "Hll Wrld!";

    it('should return "' + result + '"', function () {
      expect(squeeze(input, setOfCharacters)).toBe(result);
    });
  });

  context('when string is "Hello World!" and set of characters is "fbzXYZ"', function () {
    var input = "Hello World!";
    var setOfCharacters = "fbzXYZ";
    var result = input;

    it('should return "' + result + '"', function () {
      expect(squeeze(input, setOfCharacters)).toBe(result);
    });
  });

  context('when string is empty and set of characters is "oE"', function () {
    var input = "";
    var setOfCharacters = "oE";
    var result = "";

    it('should return "' + result + '"', function () {
      expect(squeeze(input, setOfCharacters)).toBe(result);
    });
  });

  context('when string is "Hello World!" and set of characters is ""', function () {
    var input = "Hello World!";
    var setOfCharacters = "";
    var result = input;

    it('should return "' + result + '"', function () {
      expect(squeeze(input, setOfCharacters)).toBe(result);
    });
  });

  context('when string is null and set of characters is "oE"', function () {
    var input = null;
    var setOfCharacters = "oE";
    var result = null;

    it('should return "' + result + '"', function () {
      expect(squeeze(input, setOfCharacters)).toBe(result);
    });
  });

  context('when string is "Hello World!" and set of characters is null', function () {
    var input = "Hello World!";
    var setOfCharacters = null;
    var result = input;

    it('should return "' + result + '"', function () {
      expect(squeeze(input, setOfCharacters)).toBe(result);
    });
  });

});
