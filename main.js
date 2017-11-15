function perform () {
  var res = arguments[arguments.length - 1].apply(this, [].slice.call(arguments, 0, -1))

  return {
    then: function () {
      res = arguments[arguments.length - 1](res)
      return this
    }
  }
}

perform(null, function(value) { // value === null
  var param = 1;
  console.log(param); // 1
  return param;
})
.then(function(param) { // param === 1
  console.log(++param); // 2
  return param;
})
.then(function(param) { // param === 2
  console.log(++param); // 3
  return param;
});