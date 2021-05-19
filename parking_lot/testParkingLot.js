const fs = require("fs")
const Parking = require("./functional_spec")
const textCommand = fs.readFileSync("../functional_spec/fixtures/file_input.txt", "utf-8")
const commandRun = textCommand.split('\n')

commandRun.forEach((el, i) => {
    const cmd = el.split(' ')
    if (cmd[0] === 'create_parking_lot') {
        const lot = cmd[1]
        console.log(Parking.createParkingLot(lot))
    } else if (cmd[0] === 'park') {
        const noPol = cmd[1]
        console.log(Parking.parkingIn(noPol))
    } else if (cmd[0] === 'leave') {
        const hour = cmd[2]
        const noPol = cmd[1]
        console.log(Parking.parkingOut(noPol, hour))
    } else if (cmd[0] === 'status') {
        console.table(Parking.status())
    }
})