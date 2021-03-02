
//var VS let VS const

// const x = 10;

// x = 25;

// console.log(x)

// const arr = [];

// arr.push(15);
// arr.push(37);

// console.log(arr)

// let x = 45

// if (true){
//     let x = 67
//     console.log(x)
// }

// console.log(x)

// function demo(){
//     {
//         let x = 56
//         {
//             let x = 90
//             console.log(x)
//         }
//         console.log(x)
//     }
// }
// demo(45)

//**Template string */

// const name = 'Younus Ali Akash'
// const dob = ' 02 Auguest 1999'
// const email = 'younusaliakash8@gmail.com'
// const age = '21'

// const all = `Name: ${name}, Date of Birth: ${dob}, Email: ${email}`
// console.log(all)

// const newAll = `I am ${name} & I'm ${age < 18 ? 'not' : ''} adult`

// console.log(newAll)

// console.log(name.padStart(15, 'u'))
// console.log(name.padEnd(45))
// console.log('s'.repeat(6))

//**Arrow function in ES6 */

//            //?? Normal function
// function add(a,b){
//     return a + b
// }
// console.log(add(5,6))

// let sum = function (a,b){
//     return a + b
// }
// console.log(sum(4,6))

//              //?? Arrow Function//

// let newadd = (a,b) => a + b

// console.log(newadd(23,27))

// let singl = a => 3*a

// console.log(singl(5))

//**Arrow function this */

// function test(){
//     console.log(this)
// }
// test.call({})
// test()

// let obj = {
//     name : 'Akash',
//     print : () =>{
//         console.log(this)
//     }
// }

// obj.print()

// let hell = {
//     name : 'XXX',
//     print : function (){
//         let ttt = this
//         setTimeout(function () {
//             console.log(`I'am ${ttt.name}`)
//         },1000)
//     }
// }
// hell.print()

// let hell = {
//     name : 'XXX',
//     print : function (){
//         setTimeout(() => {
//             console.log(`I'am ${this.name}`)
//         },1000)
//     }
// }
// hell.print()

//**Defult Perameter */
// function sqr (n=1){
//     return n*n
// }
// console.log(sqr(34))

// function abc (name= 'Sir', msg = 'Hello' ){
//     console.log(`Good Evening
//     ${msg}, ${name}`)
// }
// abc('Akash', 'Hey')

//**Rest an Spread Operator */
// function sum (){
//     let arg = 0

//     for (let i = 0 ; i <arguments.length ; i++){
//         arg+= arguments[i]
//     }
//     return arg
// }
// console.log(sum(1,2,3,5,7,8,))

// //or

// function sum1(...rest){
//     return rest.reduce((a,b) => a +b)
// }
// console.log(sum1(1,5,6,9))

// let a = [1,2,3]
// console.log(...a)

// let obj = {
//     a:1,
//     b:2,
//     c:3
// }
// let obj2 = {...obj}
// console.log(obj2)

//**Destucturing */
// let obj ={
//     name: 'Akash',
//     phone: '000',
//     address :{
//         city: 'Natore',
//         zilla: 'Natore Sadar'
//     }
// }

// let {name,phone, address:{city, zilla}} = obj
// console.log(name, city, phone, zilla)

// let arr =[1,2,3,4,5]

// let [frist,second,,,last]= arr
// console.log(last,second)

//**Object from entries */

// let obj = {
//     a : 30,
//     v : 90
// }

// console.log(Object.entries(obj))

// let arr = [
//     ['c',50],
//     ['f', 40]
// ]

// console.log(Object.fromEntries(arr))

//** Iterator*/
// let arr = [1,2,3,4,5,6]

// // for (let i = 0; i< arr.length; i++){
// //     console.log(arr[i])
// // }

// function createIterator (data){
//     let i = 0
//     return {
//         next(){
//             return{
//                 done: i >= data.length,
//                 value : data[i++]
//             }
//         }
//     }
// }

// let iterate = createIterator(arr)
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
      
        //**Iterator in ES6 */

// let arr =[1,2,3,]

// let iterate = arr[Symbol.iterator]()


// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// let str = 'AKASH'
// let iterate1 = str[Symbol.iterator]()

// console.log(iterate1.next())
// console.log(iterate1.next())
// console.log(iterate1.next())
// console.log(iterate1.next())
// console.log(iterate1.next())
// console.log(iterate1.next())

//**For of Loop */

// let arr = [1,2,3]

// for ( let v of arr){
//     console.log(v)
// }

// let str = "YA Akash"

// for ( let v of str){
//     console.log(v)
// }

// let obj= {
//     a :12,
//     b : 23
// }

// for ( let v of obj){
//     console.log(v)
// }

//**Generator function */

// let obj = {
//     start : 1,
//     end : 5,

//     [Symbol.iterator]: function* (){
//         let currentValue = this.start
//         while( currentValue <= this.end){
//             yield currentValue++
//         }
//     }

// }
// let iterate = obj[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// z

// function* gererate (){
//     yield 1
//     yield 2
//     yield 3
// }

// let it = gererate()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// let arr= [1,2,3]
// function* generate (data){
//     for (let i = 0; i < data.length; i++){
//         yield data[i]
//     }
// }

// let itc = generate(arr)
// console.log(itc.next())
// console.log(itc.next())
// console.log(itc.next())
// console.log(itc.next())

//**New Set in javaScript */

// let set = new Set ([1,2,3])
// set.add (5)
// set.add(4)
// set.add(2)
// set.delete(2)


// console.log(set.size)
// console.log(set.clear)
// console.log(set)
// console.log(set.has(5))
// console.log(set.keys())
// console.log(set.values())

// let keyiterate = set.values()

// console.log(keyiterate.next())

// for (let v of set){
//     console.log(v)
// }

// console.log(set.entries())

//**Map in ES6 */

// let map = new Map ([
//     ['x', 4],
//     ['y', 5],
//     ['z', 6]
// ])

// map.set('q', 10)
// map.delete('z')
// // map.clear()
// map.set({name: 'Akash'}, 100)
// console.log(map.get('y'))
// console.log(map.has('x'))
// console.log(map)
// console.log(map.keys())
// console.log(map.values())
// console.log(map.entries())

// for (let [k,v] of map){
//     console.log(k,v)
// }
// map.forEach ((v,k) => {
//     console.log(v, k)
// })

//**weak Set in ES6 */

//**Class in ES6 */

// function Reactiangle (width, height){
//         this.width = width
//         this.height = height
//         console.log(this.width*this.height)
//         this.draw()
// }

// Reactiangle.prototype.draw = function(){
//         console.log(this)
//         console.log(this.height*this.width)

// }

// let rect = new Reactiangle(4,5)

// class Rectangle {
//         constructor(width, height){
//                 this.width = width
//                 this.height = height
//                 this.draw()
//         }
//         draw() {
//                 console.log(this)
//         }
// }

// let rect1 = new Rectangle(6,7)

//**Static Method */

// class Person {
//         constructor (name, email){
//                 this.name = name,
//                 this.email = email
//         }

//         print(){
//                 console.log(this.name , this.email)
//         }
//         static test(str){
//                 let test1 = JSON.parse(str)
//                 return new Person(test1.name, test1.email)
//         }
// }

// let str = '{"name" : "Younus Ali", "email":"ya@gmail.com"}'
// let str1 = Person.test(str)
// console.log(str1)

//This Keyword in ES6**//

//**Private data in ES6 */

// const _redius = Symbol()
// const _name = Symbol()
// const _draw = Symbol()
// class Circle{
//         constructor (redius, name){
//                 this[_redius] = redius
//                 this[_name] = name

//         }
//         [_draw](){
//                 console.log('Drewing')
//         }

// }

// let c1 = new Circle(5, 'CRED')
// console.log(c1)

//**Hide eproperty data Property in ES6 */

// const _redius = new WeakMap()
// const _name = new WeakMap()
// const _resize = new WeakMap()

// class Circle{
//         constructor (redius, name){
//                 this.size =200
//                 _redius.set(this, redius)
//                 _name.set(this, name)
//                 _resize.set(this, () =>{
//                         console.log(this.size)
//                 })

//         }
//         draw(){
//                 console.log('Dreaw')
//                 console.log(_redius.get(this), _name.get(this))
//                 _resize.get(this)()
//         }

// }

// let c1 = new Circle(5, 'CRED')
// console.log(c1)
// c1.draw()

//**Geter & seter in ES6 */
// const _redius = new WeakMap()
// const _name = new WeakMap()
// const _resize = new WeakMap()

// class Circle{
//         constructor (redius, name){
//                 this.size =200
//                 _redius.set(this, redius)
//                 _name.set(this, name)
//                 _resize.set(this, () =>{
//                         console.log(this.size)
//                 })


//         }
//         get redius() {
//                 return _redius.get(this)
//         }
//         set redius(v){
//                  _redius.set(this, v) 
//         }
//         draw(){
//                 console.log('Dreaw')
//                 console.log(_redius.get(this), _name.get(this))
//                 _resize.get(this)()
//         }

// }

// let c1 = new Circle(5, 'CRED')
// console.log(c1)
// c1.draw()
// c1.redius = 300
// console.log(c1.redius)

//**Inharetance in ES6 */

// class Shape {
//         constructor(color){
//         this.color = color
        
// }

//         draw(){
//                 console.log('Drawing')
//         }
// }

// class Rectangle extends Shape{
//         constructor (color, width,height){
//                 super(color)
//                 this.width = width
//                 this.height = height
//         }
//         cal(){
//                 return this.width*this.height
//         }
// }


// let r = new Rectangle('red',5, 8)
// console.log(r)
// r.draw()

//**Modules in es6 */

// import Rectangle from './Rectangle'

// let r = new Rectangle('red',5, 8)
// console.log(r)
// r.draw()






