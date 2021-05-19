const { beforeAll } = require('@jest/globals');
const Parking = require('../functional_spec');

beforeAll((done) => {
	Parking.createParkingLot(0);
	done();
});

describe('Create Paking Lot as much n', () => {
	test('Success Creating Parking Lot', (done) => {
        let n = 6
		let result = Parking.createParkingLot(n);
		expect(result).toBe(`Created parking lot with ${n} slots`);
		done();
	});
});

describe('Entry Parking a Car', () => {
	test('Success Parking', (done) => {
        const noPol = [
            'KA-01-HH-1234',
            'KA-01-HH-9999',
            'KA-01-BB-0001',
            'KA-01-HH-7777',
            'KA-01-HH-2701',
            'KA-01-HH-3141'
        ]
        noPol.forEach((el, i) => {
            let result = Parking.parkingIn(el);
            expect(result).toBe(`Allocated slot number: ${1 + i}`);
        });
		done();
	});
});

describe('Parking is full', () => {
	test('Full notification', (done) => {
		let result = Parking.parkingIn('KA-03-LL-5555');
		expect(result).toBe('Sorry, parking lot is full');
		done();
	});
});

describe('Checkout Parking', () => {
	test('Bill Parking Checkout', (done) => {
        const hour = 4;
		const noPol = 'KA-01-HH-3141';
        let result = Parking.parkingOut(noPol, hour);
		expect(result).toBe(`Registration number ${noPol} with Slot Number 6 is free with Charge 30`);
		done();
	});
});

describe('Car Number is not found', () => {
	test('not found car number notification', (done) => {
        const hour = 4;
		const noPol = 'KS-10-CC-1010';
		let result = Parking.parkingOut(noPol, hour);
		expect(result).toBe(`Registration number ${noPol} not found`);
		done();
	});
});

describe('Parking lot status', () => {
	test('Parking Lost Status Notification', (done) => {
		const result = Parking.status();
		expect(result).toHaveLength(5);
        expect(result[0]["Slot No."]).toBe(1);
		expect(result[0]["Registration No."]).toBe('KA-01-HH-1234');
		done();
	});
});
