let dataParking = []

class Parking {
    static createParkingLot(n) {
        for (let i = 0; i < n; i++) {
            dataParking.push({
                reserved: false,
                carNumb: ""
            })
        }
        return `Created parking lot with ${n} slots`
    }

    static parkingIn(noPol) {
        let count = 0
        for (let i = 0; i < dataParking.length; i++) {
            if (!dataParking[i].reserved) {
                dataParking[i].reserved = true
                dataParking[i].carNumb = noPol
                return `Allocated slot number: ${i + 1}`
            } else if (dataParking[i].reserved) {
                count++
            }
        }
        if (count === dataParking.length) {
            return `Sorry, parking lot is full`
        }
    }

    static parkingOut(noPol, hour) {
        let price = ((hour - 2) * 10) + 10
        for (let i = 0; i < dataParking.length; i++) {
            if (dataParking[i].carNumb === noPol) {
                dataParking[i].reserved = false
                dataParking[i].carNumb = ""
                return `Registration number ${noPol} with Slot Number ${i + 1} is free with Charge ${price}`;
            } 
        }
        return `Registration number ${noPol} not found`;
    }

    static status() {
        let result = []
        for (let i = 0; i < dataParking.length; i++) {
            if (dataParking[i].reserved) {
                result.push({
                    "Slot No.": i + 1,
                    "Registration No.": dataParking[i].carNumb
                })
            }
        }
        return result;
    }
}

module.exports = Parking