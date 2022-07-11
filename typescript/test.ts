class person{
    age = 10
    gender = '男 '
    add(num:number){
        this.age = num+1
    }
    
}
const p = new person()
p.add(12)
console.log(p.age);