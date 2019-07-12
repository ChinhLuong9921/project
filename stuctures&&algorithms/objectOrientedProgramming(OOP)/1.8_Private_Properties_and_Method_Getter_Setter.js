// The Abstraction Principle is hide the details and expose only the essentials____
// Điều hành giúp các lập trình viên có thể che dấu những method ko cần thiết khi có lệnh từ bên ngoài truy cập vào function
// Getter and Setter______________________________________________
var obj1 = {
    foo: 'this is the value of foo',
    getFoo: function() {
      return this.foo;
    },
    setFoo: function(val) {
      this.foo = val;
    }
  };
   
console.log(obj1.getFoo());
// "this is the value of foo"
   
obj1.setFoo('hello');
   
console.log(obj.getFoo());
// "hello"


var obj2 = {
    fooVal: 'this is the value of foo',
    get foo() {
      return this.fooVal;
    },
    set foo(val) {
      this.fooVal = val;
    }
};
  
  // getter 
console.log(obj2.foo);
  // "this is the value of foo"
  
  // setter 
obj2.foo = 'hello';
   
console.log(obj2.foo);
  // "hello"

// Private Properties and Methods___________________________________________________________________________

// Override prevention______________________ 
// dùng phương thức defineProperties
var obj = {
    foo: 'this is the value of foo'
  };
   
Object.defineProperties(obj, { // prevent---
    'getFoo': {
      value: function () {
        return this.foo;
      }
    },
    'setFoo': {
      value: function (val) {
        this.foo = val;
      }
    }
});
   
obj.getFoo = 66;
  // getFoo is not going to be override!
   
console.log(obj.getFoo());
  // "this is the value of foo"

// BLOCK SCOPE, leave the braces alone!____________________
// tạo ra 1 block bằng cách đặt mã vào {}
{
    let fooVal = 'this is the value of foo';
    var obj = {
      get foo() {
        return fooVal;
      },
      set foo(val) {
        fooVal = val
      }
    }
}
   
  fooVal = 'hello';
  // not going to affect the fooVal inside the block
   
  console.log(obj.foo);
  // "this is the value of foo"

// Factories of function_________________________
// đưa dữ liệu vào function để biến ko bị thay đổi
  function myobj(){
    var fooVal = 'this is the value of foo';
    return {
      get foo() {
        return fooVal;
      },
      set foo(val) {
        fooVal = val
      }
    }
  }
   
  fooVal = 'hello';
  // not going to affect our original fooVal
   
  var obj = myobj();
   
  console.log(obj.foo);
  // "this is the value of foo"

  // Not use Scope_________________________________
  // tạo biến bằng kí tự hoặc số ngẫu nhiên để khiến chúng vô hình ở bên ngoài
  var obj = {
    s89274934764: 'this is the value of foo',
    get foo() {
      return this.s89274934764;
    },
    set foo(val) {
      this.s89274934764 = val;
    }
  }
   
  console.log(obj.foo);
  // "this is the value of foo"