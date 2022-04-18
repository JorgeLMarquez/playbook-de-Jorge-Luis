const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

console.log("\n\tEjercicio 2.1 y 2.2")
explorers.forEach( explorer => console.log("Nombre:" +explorer.name+ "," + "Stack: " +explorer.stack))

console.log("\n\tEjercicio 2.3")
const explorers_stacks = explorers.map(explorer=>explorer.stack)
console.log(explorers_stacks)

console.log("\n\tEjercicio 2.4")
const explorer_with_js = explorers.filter(explorer=>explorer.stack.includes("js"))
console.log(explorer_with_js)

console.log("\n\tEjercicio 2.5")
const first_explorer_in_cdmx= explorers.find(explorer => explorer.city === "CDMX")
console.log(first_explorer_in_cdmx)

console.log("\n\tEjercicio 2.6")
const all_excercises = explorers.reduce((acumulador,explorer) => acumulador + explorer.exercises_completed, 0)
console.log(all_excercises)

console.log("\n\tEjercicio 2.7")
const atLeastOne = explorers.some(explorer => explorer["missions"]["frontend"].exercisesFinished === true)
console.log(atLeastOne)

console.log("\n\tEjercicio 2.8")
const allofThem = explorers.every(explorer => explorer["missions"]["onboarding"].exercisesFinished === true)
console.log(allofThem)
