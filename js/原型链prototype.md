##原型内存解释代码
```java
    //定义一个函数
    function Fn() {
        //函数被创建时 内部新建了一个属性prototype
        //this.prototype={}
      //   并且给了一个空对象且是实例对象 object
      //空对象的实例就是object
      //所以object还有隐式__proto__
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
   ![原型的内存图](https://github.com/starrychen912/myStudyGit/blob/master/js/jsStudyScreen/prototypeMemory.png?raw=true)
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
```java
   // js引擎的内置object对象
    console.log(Object);
    // object对象的原型对象
    console.log(Object.prototype);
    //object对象的原型对象了吗有一个隐式原型__proto__
    console.log(Object.prototype.__proto__);//返回undefined原型链的尽头
    //定义一个函数
    function Fn() {
        // 在Fn上添加一个方法
        this.test1=function(){
            console.log('test1()');
        }
    }
    Fn.prototype.test2=function(){
        // 在原型上定义一个方法
        console.log('test2()');
    }
    // 创建一个实例对象
    var fn = new Fn();
    // 因为fn是Fn的实例对象，是它调用了Fn所以this就是fn，继而是给fn添加了一个test1方法
    fn.test1()
    fn.test2()
    console.log(fn.toString());
    //返回undefined
    console.log(fn.test3);
    //就是把undefined当作函数去执行，所以报错
    fn.test3()
    //原型链只找属性（方法）
    fn.test2()
    //下面就是找变量，不会走原型链
    test3()
```
1. 在js引擎运行时，就会存在一个object函数对象，就有prototype属性，是用来加载一些内置的函数
1. 原型链图解 
   ![原型链](https://github.com/starrychen912/myStudyGit/blob/master/js/jsStudyScreen/prototypeChain.png?raw=true)
   1. 访问一个对象的属性时
    - 先在自身属性中查找，找到返回
    - 如果没有，在沿着__proto__这条链向上查找，找到返回
    - 如果最终没有找到，返回undefined
   2. 别名：隐式属性链
   3. 作用：查找对象的属性（方法）
2. 构造函数/原型/实体对象的关系
   ![构造函数/原型/实体对象的关系](https://github.com/starrychen912/myStudyGit/blob/master/js/jsStudyScreen/COIrelation1.png?raw=true)
3. 构造函数/原型/实体对象的关系2  
   ![构造函数/原型/实体对象的关系2](https://github.com/starrychen912/myStudyGit/blob/master/js/jsStudyScreen/COIrelation2.png?raw=true) 
   ```java
   //创建一个函数 就是创建一个实例函数对象 
   function Foo(){}
   //Function为构造函数 即Foo.__proto__=Function.prototype
   var Foo=new Function()
   //创建了一个函数对象为Function 且实例也为他本身 所以Function的显示原型和隐式原型相等Function.__proto__=Function.prototype
   Function = new Function()
   //函数的显示原型指向的对象默认是空Object实例对象（但Object不满足） 
   console.log(Fn.prototype instanceof Object);//true
   console.log(Object.prototype instanceof Object);//false
   console.log(Function.prototype instanceof Object);//true
   //所有函数都是Function实例（包含Function）
    console.log(Function.prototype===Function.__proto__);//true
    //object的原型对象是原型链的尽头
    console.log(Object.prototype.__proto__);//null
   ```
   1. 所有实例对象的隐式原型都是构造函数的显示原型
   2. 所有函数的__proto__都是一样的  
      因为所有函数都是 function Foo(){}=(var Foo = new Function())    
      Function = new Function()  

##原型链属性
```java
 //定义一个函数
    function Fn(){

    }
    // 在原型在添加一个属性
    Fn.prototype.a="xxx";
    // 构建一个实例对象
    var fn1 = new Fn()
    console.log(fn1.a);

    // 构建一个实例对象
    var fn2 = new Fn()
    fn2.a="yyy"
    console.log(fn1.a,fn2.a);//xxx yyy
```
1. 读取对象的属性值时，会自动到原型链中查找
2. 设置对象的属性值时，不会查找原型链，如果当前对象中没有此属性，直接添加此属性值并设置其值
3. 方法一般定义在原型中，属性一般通过构造函数定义在对象本身上

###实例 instanceof
1. instanceof是如何判断的
   - 表达式： A instanceof B
   - 如果B函数的显示原型对象在A对象的原型链上，返回true 
```java
 //案例一
    function Foo(){
    }
    var f1 = new Foo()
    //左边是实例对象 右边是构造函数对象
    console.log(f1 instanceof Foo);//true
    console.log(f1 instanceof Object);//true
   //案例二
   //Object实例是new function产生的 object和function是你中有我，我中有你的关系
   console.log(Object instanceof Function);//true
   console.log(Object instanceof Object);//true
   console.log(Function instanceof Function);//true
   console.log(Function instanceof Object);//true
   console.log(Object instanceof Foo);//false
```
###原型链联系
```java
//测试题一
    function A(){
    }
    A.prototype.n=1
    var b = new A()
    //把prototype的指向从n变成下面的
    A.prototype={
        n:2,
        m:3
    }
    var c = new A()
    console.log(b.n, b.m , c.n , c.m);//1,undefined,2,3
    ```
    ![原型链练习]()
//测试题二
    function F(){}
    Object.prototype.a=function(){
        console.log('a()');
    }
    Function.prototype.b=function(){
        console.log('b()');
    }
    var f =new F()
    //根据ciorelationship2中的__proto__链查找
    f.a()//可以 找F的原型对象是一个空的Object实例对象，再找实例对象Object的原型对象
    f.b()//报错 实例对象 只能通过隐式原型找到它的构造函数的显示原型并不是找到它的构造函数  接着上面的那一步
    F.a()//可以
    F.b()//可以
    ```

    