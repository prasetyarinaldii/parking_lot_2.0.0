let dataParking = []

class Parking {
    static createParkingLot(n) {
        n.forEach((el, i) => {
            dataParking.push({
                reserved: false,
                carNumb: ""
            })
        })
        return `Created parking lot with ${n} slots`
    }

    static enterParking(noPol) {
        dataParking.forEach((el, i) => {
            if (!el.reserved) {
                el.reserved = true
                el.carNumb = noPol
                return `Allocated slot number: ${i + 1}`
            } else {
                return `Sorry, parking lot is full`
            }
        })
    }

    static outParking(noPol, hour) {
        let price = (hour - 2) * ( 10 + 10)
        dataParking.forEach((el, i) => {
            if (el.carNumb === noPol) {
                el.reserved = false
                el.carNumb = ""
                return `Registration number ${noPol} with Slot Number ${i + 1} is free with Charge ${price}`;
            } else {
                return `Registration number ${noPol} not found`;
            }
        })
    }

    static status() {
        let result = []
        dataParking.forEach((el, i) => {
            if (el.reserved) {
                result.push({
                    "Slot No.": i + 1,
                    "Registration No.": el.carNumb
                })
            }
        })
        return result;
    }
}

module.exports = Parking