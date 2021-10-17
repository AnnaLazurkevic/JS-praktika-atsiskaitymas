const people =  [
    {name: 'Zenonas', surname: 'Zen', age: 26, height:1.80, weight:55, sex:'Vyras' },
    {name: 'Bronius', surname: 'Bron', age: 28, height:1.80, weight:90, sex:'Vyras' },
    {name: 'Stanislav', surname: 'Stan', age: 14, height:1.600, weight:90, sex:'Vyras' },
    {name: 'Leon', surname: 'Leo', age: 45, height:1.90, weight:80, sex:'Vyras' },
    {name: 'Liucija', surname: 'Liuc', age: 11, height:1.35, weight:80, sex:'Moteris' },
    {name: 'Zinaida', surname: 'Zin', age: 75, height:1.58, weight:90, sex:'Moteris' },
    {name: 'Kosmada', surname: 'Kos', age: 35, height:1.58, weight:60, sex:'Moteris' },
    {name: 'Regina', surname: 'Reg', age: 19, height:1.80, weight:75, sex:'Moteris' }
    
]
console.table(people)
// - Atspausdinti kiekvieną elementą
//   - Atspausdinti kiekvieno elemento pilną vardą
//   - Atspausdinti kiekvieno elemento kūno masės indeksą???


{
// function printPerson(person) {
//      console.log(person);
// }
//   people.forEach(printPerson);
people.forEach(p => console.log(p));
people.forEach(p=> console.log(p.name+' '+p.surname))
// people.forEach(({ name, surname }) => console.log(`${name} ${surname}`));

people.forEach(p=>{
   console.table(Math.round (10*p.weight / (p.height)**2)/10)
})
//  3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
//  - kurių vardas ilgesnis nei 6 simboliai
//  - kurių svoris didesnis nei 80kg
//  - kurie aukštesni nei 185cm

// const namesLongerThen = people.filter(function(longerThen){
//     return longerThen.name.length>6
//    })

const namesLongerThen= people.filter(x=>x.name.length>6)
console.table(namesLongerThen)
// const weightHeavierThen = people.filter(function(heavierThen){
//     return heavierThen.weight>80
// })
const weightHeavierThen =people.filter(p=>p.weight>80)
console.table(weightHeavierThen)


const heightHigherThen = people.filter(function(higherThen){
    return higherThen.height >(185/100)
})
console.table(heightHigherThen)
// 4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
//  - ūgius
//  - svorius



// function  removeHeight({height}){
//     return [height];
// }
// const heights=people.map(removeHeight)
// console.log(heights)
const removeHeight =people.map(p=>p.height)

console.table(removeHeight)


// const heights = person.map(x=>{return {h:x.height}}
// )
// console.log([heights])


// function removeWeight ({weight}){
//     return [weight];
// }
// const Weights = people.map(removeWeight)

const weights=people.map(p=>p.weight)
console.table(weights)


//  - ūgius, svorius ir amžius : [{height, weight, age}, ...]

// function removeHeightWeightAge ({height,weight,age}){
//     return [height,weight,age];
// }
// const resultHeightWeightAge = people.map(removeHeightWeightAge)
// console.log({resultHeightWeightAge})
console.table( people.map(({height,weight,age})=>({height,weight,age})))
// console.log(people.map(p=>({
     
//     height:p.height,
//     weight:p.weight,
//     age:p.age})))

//  - KMI indeksus
//  - KMI indeksus ir amžius
console.table(people.map(p=>Math.round (10*p.weight / (p.height)**2)/10))
console.table(people.map(({weight,height,age})=>({
age,
KMI:Math.round (10*weight / (height)**2)/10
})))

// 5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
//  - svorių vidurkį
//  - ūgio vidurkį

// const totalWeight =function(prev,curr){
//    return prev+(curr/Weights.length);
// }
// console.log(Weights.reduce(totalWeight, 0));
console.table( people.reduce((sum,p)=>sum + p.weight, 0)/people.length)

console.table(people.reduce((sum,p)=> sum+ p.height,0)/people.length)
}
// const totalHeight = function(prev, curr){
//     return prev+(curr/heights.length);
// }
// console.log(heights.reduce(totalHeight, 0));


// ------------------------------------ 2 Dalis ------------------------------------ 
// 0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
//     Person klasėje:    
//     - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
//     - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
// 1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg 
// 2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5



    class Person{
     
        constructor({name, surname, age, height,weight,sex}){
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.height = height;
            this.weight = weight;
            this.sex = sex;
        }
        getBMI = ()=>{
            return Math.round(10 * this.weight/ (this.height)**2) /10
        }
        get bmi  (){
            return Math.round(10 * this.weight/ (this.height)**2) /10
        }
        getToString (){
            return `name: ${this.name} surname:${this.surname},\n\t\ age: ${this.age}, height: ${this.height}, weight: ${this.weight}, sex: ${ this.sex }`        }
    }
   

// const newPeople1= new Person({name: 'Zenonas', surname: 'Zen', age: 25, height:1.80, weight:70, sex:'Vyras' })
// console.log(newPeople1)
const newPeople = people.map(x=>new Person(x))
// newPeople = people.map(x=>new Person(x.name, x.surname, x.age,x.height,x.weight,x.sex))
console.log(newPeople)


// atspausdina žmogų su esamom savybėm
console.table(newPeople)
newPeople.forEach(p=>console.table(p.getBMI ()));
 
newPeople.forEach(p=>console.table(p.getToString ()));
 
 const woomenPretty = newPeople.filter(x=>x.sex==='Moteris' && x.age<20 && x.weight>70);
 console.table(woomenPretty)
const menPretty = newPeople.filter(p=>p.sex==='Vyras' && p.age>25 && p.getBMI()<18.5);
console.table(menPretty)

const children = newPeople.filter(p=>p.age<16 && p.getBMI()>30);
console.table(children)
// 3. Atrinkti vaikus, su antsvoriu (KMI > 30)
// 4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
const pensioners = newPeople.filter(p=>p.age>70 && p.getBMI()>30);
console.table((pensioners))
// 5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]

const allPeopleBmiLessMore = newPeople.filter(p=>p.getBMI()<18.2 || p.getBMI()>25);
console.table(allPeopleBmiLessMore)
// const result = peopleArr.filter(p => {
//     const bmi = p.getBMI();
//     return bmi < 18.5 || bmi > 25;
//   });
  


 
