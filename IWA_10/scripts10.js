const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);

const copied = { ...holidays[christmas], name: 'X-mas Day' };
const correctDate = new Date(copied.date);
correctDate.setHours(0, 0, 0, 0);
const isEarlier = correctDate < holidays[christmas].date;
if (isEarlier) copied.date = correctDate;

console.log('ID change:', holidays[christmas].id !== copied.id || copied.id);
console.log('Name change:', holidays[christmas].name !== copied.name || copied.name);
console.log('Date change:', holidays[christmas].date.getTime() !== copied.date.getTime() || copied.date);

const holidayTimestamps = Object.values(holidays).map(holiday => holiday.date.getTime());
const firstHolidayTimestamp = Math.min(...holidayTimestamps);
const lastHolidayTimestamp = Math.max(...holidayTimestamps);

const firstDate = new Date(firstHolidayTimestamp);
const lastDate = new Date(lastHolidayTimestamp);

console.log(`${firstDate.getDate()}/${firstDate.getMonth()}/${currentYear}`);
console.log(`${lastDate.getDate()}/${lastDate.getMonth()}/${currentYear}`);

const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomIndex];
console.log(randomHoliday.date);