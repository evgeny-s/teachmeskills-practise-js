// Exercise 01
// Try to suggest what result will be in the each section

var f = function() {
  this.x = 5;
  (function() {
    this.x = 3;
  })();
  console.log(this.x);
};

var obj = {x: 4, m: function() {
    console.log(this.x);
  }};


// 1:
f();

// 2:
new f();

// 3:
obj.m();

// 4:
new obj.m();

// 5:
f.call(f);

// 6:
obj.m.call(f);