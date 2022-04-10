//this includes the vehicle class as a module
const VehicleModule = require('./vehicke').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;

    }

    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;
            } 
            else {
                console.log(" Can't take all of the passengers")

            }
        }
        else {
            console.log(this.model + "is full")
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("engine has started");
            return this.started = true;
        }

        else {
            console.log(`The ${this.model} has no fuel`);
            return this.started = false;
        }
    }

    scheduleService(mileage) {
        if (this.mileage > 30000){
            console.log(`It is time to get the ${this.model} serviced`);
            return this.maintenanceTime = true;
        }

        else {
            console.log(`The ${this.model} does not need service yet`);
            return this.maintenanceTime = false;
        }
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

myCar.start()
myCar.loadPassenger(5)
myCar.scheduleService()

console.log(myCar)