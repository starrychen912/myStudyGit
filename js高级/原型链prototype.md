##原型内存解释代码
```java
    //定义一个函数
    function Fn() {
        //函数被创建时 内部新建了一个属性prototype
        //this.prototype={}
    }
    //1. 每个函数function都有一个prototype，即显示原型（属性）
    console.log(Fn.prototype);
    // 创建一个实例对象
    var fn = new Fn()//在实例对象被创建的时候，内部this.__proto__=Fn.prototype
    // 2. 每个实例对象都有一个_prototype_，称为隐式原型（属性）
    console.log(fn.__proto__);
    // 3. 对象的隐式原型的值为其对应构造函数的显示原型的值
    console.log(Fn.prototype===fn.__proto__);
    // 给原型添加方法
    Fn.prototype.test=function(){
        console.log('test()');
    }
    // 实例对象找属性的规则，先从本身找，如果没有就从隐式原型属性上找
    fn.test()
```
1. 每个函数 function 都有一个 prototype，即显示原型（属性）
2. 每个实例对象都有一个__proto__，称为隐式原型（属性）
3. 对象的隐式原型的值为其对应构造函数的显示原型的值
4. 内存结构（图）
   ![原型的内存图](https://github.com/starrychen912/myStudyGit/blob/master/prototypeMemory.png?raw=true)
5. 总结：
   1. 函数的 prototype 属性：在定义函数时自动添加的，默认值是一个空 object 对象
   2. 对象的__proto__属性：创建对象时自动添加的，默认值为构造函数的 prototype 属性值
   3. 程序员能直接操作显示原型，但不能直接操作隐式原型（es6 之前）
6. 属性和方法的区别
   java 是一门面向对象的编程语言，我们可以把所有事物看做一个对象去用 java 来描述，而类就是一种对象的集合就像，人类就是人的集合。每个人都是一个对象而类的属性就是对象共有的东西，比方说每个人都有，名字，性别，年龄，身高等等。这些就是属性，而方法就是我们可以做什么，我们可以吃，跑，走，停 说等等，这些就是“人类”里的方法
   ```java
   class People{
   private String name; //名字
   private String sex; //性别
   //以上是属性 下面就是方法了
   public void eat(Food food){
      //吃 food 是 食物类
      }
   }
   ```
##原型链代码

