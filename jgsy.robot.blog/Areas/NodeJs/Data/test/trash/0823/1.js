var assert =  require('assert');
assert.throws(
    function() {
      throw new Error("Wrong value");
    },
    Error
  );assert.throws(
    function() {
      throw new Error("Wrong value");
    },
    /value/
  );
  assert.throws(
    function() {
      throw new Error("Wrong value");
    },
    function(err) {
      if ( (err instanceof Error) && /value/.test(err) ) {
        return true;
      }
    },
    "unexpected error"
  );