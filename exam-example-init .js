const data = [
  { brand: 'Toyota', model: 'Yaris', year: 2002, color: 'red', fuelTypes: ['dysel'], price: 800 },
  { brand: 'Tesla', model: 'Model 3', year: 2016, color: 'black', fuelTypes: ['electric'], price: 22000 },
  { brand: 'Toyota', model: 'Avensis', year: 2015, color: 'blue', fuelTypes: ['petrol'], price: 13000 },
  { brand: 'Audi', model: 'A6', year: 2015, color: 'black', fuelTypes: ['dysel', 'petrol'], price: 14000 },
  { brand: 'Audi', model: 'A5', year: 2015, color: 'red', fuelTypes: ['petrol'], price: 17000 },
  { brand: 'Audi', model: 'R8', year: 2019, color: 'black', fuelTypes: ['petrol'], price: 17000 },
  { brand: 'Audi', model: 'R8', year: 2017, color: 'black', fuelTypes: ['petrol'], price: 15000 },
  { brand: 'Tesla', model: 'Model S', year: 2020, color: 'blue', fuelTypes: ['electric'], price: 38000 },
  { brand: 'Subaru', model: 'Impreza', year: 2010, color: 'green', fuelTypes: ['dysel', 'electric'], price: 6000 },
];
const usd_eur = 1.16;


  class Car{
    static #constructorParams = ['brand','model','year','color','fuelTypes','price']
    
constructor(...args){
  // Car.#constructorParams.forEach((name,val)=>this[name]=args[val])
  Car.#constructorParams.forEach(name => this[name] = args[0][name])

// constructor({brand, model, year,color,fuelTypes,price}){
//     this.brand =brand,
//     this.model = model,
//     this.year = year ,
//     this.color =color,
//     this.fuelTypes =[...fuelTypes] 
//     this.price = price
 }
//  getFullType(){                    //metodas
//    return this.fuelTypes.join('/')
//      }
     getFuelType=()=> this.fuelTypes.join('/')
  //  get //geteris
 get fuelType(){return this.fuelTypes.join('/')}

 
  }
  let cars;
  let electricCar;
  let petroilCars;
  console.group('1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių');
{
  // const car1 = new Car ('Toyota', 'Yaris',  2002, 'red',['dysel'], 800)
  // console.log(car1)
  const car = new Car({ brand: 'Toyota', model: 'Yaris', year: 2002, color: 'red', fuelTypes: ['dysel'], price: 800 },)
  console.log (car)
}
console.groupEnd();

console.group('2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų');
{
  // cars= data.map(x=> new Car(x.brand, x.model, x.year, x.color, x.fuelTypes, x.price))
  cars = data.map(carData=>new Car(carData))
  console.log(cars)
}
console.groupEnd();

console.group('3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes) kaip \'string\'ą atskirtą \'/\'.');
{
cars.forEach(x=>console.log(x.getFuelType()))
// cars.forEach(x=>console.log(x.fuelType))
 //su geteriu nereikia iskvetimu t.y  ()

// console.log(cars.map(x=>x.getFullType()))

}
console.groupEnd();

console.group('4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą');
{
  // su metodu
  cars.forEach(x=>console.log(  `${x.brand} ${x.model}- ${x.getFuelType()}`))
//  su get
cars.forEach(x => console.log(`${x.brand} ${x.model} - ${x.fuelType}`));
cars.forEach(({ brand, model, getFuelType }) => console.log(`${brand} ${model} - ${getFuelType()}`));
cars.forEach(({ brand, model, fuelType }) => console.log(`${brand} ${model} - ${fuelType}`));
 
}
console.groupEnd();

console.group('5. Atrinkite tik elektrinius automobilius');
{
electricCar = cars.filter(x=>x.fuelTypes.includes('electric')&& x.fuelTypes.length===1);
// const result1 = cars.filter(x=>x.fuelTypes.some(t=>t==='electric'))
console.log(electricCar)
}
console.groupEnd();

console.group('6. Atrinkite tik benzininius automobilius, naujasnius nei 2016 metai');
{
petroilCars =cars.filter(x=>x.fuelTypes.includes('petrol')&& x.fuelTypes.length===1 && x.year>2016)
console.log(petroilCars)
}
console.groupEnd();

console.group('7. Atrinkite \'audi\' markės automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai ');
{
const audiCar1=cars.filter(x=>x.brand.toLowerCase()==='audi'&& x.year>=2012 && x.year<=2016 && x.fuelTypes.some(t=>t==='dysel'))
const audiCar=cars.filter(x=>x.brand.toLowerCase()==='audi'&& x.year>=2012 && x.year<=2016 && x.fuelType!=='dysel')
const audiCar2=cars.filter(x=>x.brand.toLowerCase()==='audi'&& x.year>=2012 && x.year<=2016 && ! x.fuelTypes.includes('dysel'))
console.log({audiCar,audiCar1, audiCar2})
}
console.groupEnd();

console.group('8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį');
{
  
const avg = electricCar.reduce((sum, x )=>sum + x.price,0)/electricCar.length
// const avg1= electricCar.map(x=>x.price).reduce((sum,x)=>sum+x)/electricCar.length
console.log({avg})
}
console.groupEnd();

console.group('9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę');
{
const petroilCarsSum = petroilCars.reduce((sum,x)=>sum+x.price, 0)
console.log(petroilCarsSum)
}
console.groupEnd();

console.group('10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą');
{
const carsFormatted = cars.map(x=>{
 return {
    brand : x.brand,
    model : x.model,
    price : Math.round(x.price*usd_eur),
    fuelType : x.fuelType
  }
})
const carsFormatted2 = cars.map(({brand,model,price,fuelType})=>({
  brand,
  model,
  price: Math.round(price*usd_eur),
  fuelType,
}))

console.table(carsFormatted)
console.table(carsFormatted2)


}
console.groupEnd();
