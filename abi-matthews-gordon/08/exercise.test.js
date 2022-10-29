describe('08', () => {
    /**
     * You are the manager of a new Vehicle company
     *
     *  And you need to create different kind of cars to list in your inventory. 
     *
     *  1. Create a Vehicle parent
     *      - wheels as a property
     *      - bodyType as a property
     *
     *  2. Create different kind of vehicles from the parent
     *      - each vehicle should have a color
     *      - each vehicle should have a method called "whatIsMyName" that return the bodyType of the vehicle
     *      - Example: "I am a sedan"
     */

    test('Create a Vehicle class, and create different type of vehicles that extends', () => {

        class Vehicle {

            constructor(wheels, bodyType) {
                this.wheels = wheels;
                this.bodyType = bodyType;
            }
        }

        class Car extends Vehicle {

            constructor(color, wheels, bodyType) {
                super(wheels, bodyType);
                this.color = color;
            }

            whatIsMyName() {
                return "I am a " + this.bodyType;
            }
        }

        class Truck extends Vehicle {

            constructor(color, wheels, bodyType) {
                super(wheels, bodyType);
                this.color = color;
            }

            whatIsMyName() {
                return "I am a " + this.bodyType;
            }
        }

        class Motorcycle extends Vehicle {

            constructor(color, wheels, bodyType) {
                super(wheels, bodyType);
                this.color = color;
            }

            whatIsMyName() {
                return "I am a " + this.bodyType;
            }
        }



        // Expected outcome for the child classes
        const car = new Car('red', 4, 'sedan');
        const truck = new Truck('blue', 6, 'pickup');
        const motorcycle = new Motorcycle('green', 2, 'motorcycle');


        // Test cases
        expect(car.wheels).toBe(4);
        expect(car.bodyType).toBe('sedan');
        expect(car.color).toBe('red');
        expect(car.whatIsMyName()).toBe('I am a sedan');

        expect(truck.wheels).toBe(6);
        expect(truck.bodyType).toBe('pickup');
        expect(truck.color).toBe('blue');
        expect(truck.whatIsMyName()).toBe('I am a pickup');

        expect(motorcycle.wheels).toBe(2);
        expect(motorcycle.bodyType).toBe('motorcycle');
        expect(motorcycle.color).toBe('green');
        expect(motorcycle.whatIsMyName()).toBe('I am a motorcycle');
    });
});