const travel = {
 destination: "CDMX",
 origin: "Guadalajara City",
 latitude: 47.09,
 longitude: 50.03,
 time: 30,
 car:  "Nissan March",
 getGeneralInfo: function(){
   return `Origen: ${this.destination}, : Destino ${this.destination}
   Tiempo: ${this.time}, Car: ${this.car}`
 }
}

console.log(travel.getGeneralInfo());
