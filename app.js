const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('Toyota', 'Camry', 'Sergey', 2015, '+7 921 123 45 67', 'images/camry.png'),
    car('Mercedes', 'CLE', 'Mihail', 2013, '+7 921 478 45 88', 'images/mercedes.png'),
    car('BMW', 'M2', 'Andrey', 2018, '+7 921 789 02 71', 'images/bmw.png')
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar: function(index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        newOrder() {
            this.modalVisibility = false
            this.logs.unshift( 
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },
        cancelOrder() {
            this.modalVisibility = false
            this.logs.unshift(
                log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl')
            )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.toLowerCase().indexOf(this.search) > -1 || car.model.toLowerCase().indexOf(this.search) > -1 
            })
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }   
})