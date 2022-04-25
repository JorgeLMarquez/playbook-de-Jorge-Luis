class Travel {
  constructor(destination, origin, latitude,longitude,time,car){
    this.destination = destination
    this.origin = origin
    this.latitude = latitude
    this.longitude = longitude
    this.time = time
    this.car = car
  }  

 getGeneralInfo(){
   return `Origen: ${this.destination}, : Destino ${this.destination}
   Tiempo: ${this.time}, Car: ${this.car}`
 }
 
}

const viaje = new Travel("CDMX","Guadalajara City",47.09,50.03,30,"Nissan March")
console.log(viaje)
console.log(viaje.getGeneralInfo());
