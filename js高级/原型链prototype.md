1. 每个函数function都有一个prototype，即显示原型（属性）
2. 每个实例对象都有一个_prototype_，称为隐式原型（属性）
3. 对象的隐式原型的值为其对应构造函数的显示原型的值
4. 内存结构（图）
    ![原型的内存图](https://github.com/starrychen912/myStudyGit/blob/master/js%E9%AB%98%E7%BA%A7/jsStudyScreen/%E5%8E%9F%E5%9E%8B%E5%86%85%E5%AD%98.png?raw=true)
5. 总结：
   1. 函数的prototype属性：在定义函数时自动添加的，默认值是一个空object对象
   2. 对象的__proto__属性：创建对象时自动添加的，默认值为构造函数的prototype属性值
   3. 程序员能直接操作显示原型，但不能直接操作隐式原型（es6之前）