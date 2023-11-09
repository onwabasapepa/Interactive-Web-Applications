 // scripts.js

// const STATUS_MAP = {
//     shelf: {
//         color: 'green',
//         canReserve: true,
//         canCheckout: true,
//         canCheckIn: false,
//     },
//     reserved: {
//         color: 'blue',
//         canReserve: false,
//         canCheckout: true,
//         canCheckIn: false,
//     },
//     overdue: {
//         color: 'red',
//         canReserve: false,
//         canCheckout: false,
//         canCheckIn: true,
//     },
//     checkedOut: {
//         color: 'orange',
//         canReserve: false,
//         canCheckout: false,
//         canCheckIn: true,
//     }
// }

// // Edit below line 

// // status = selector(status)
// // reserve = selector(reserve)
// // checkout = selector(checkout)
// // checkin = selector(checkin)

// // status = selector(status)
// // reserve = selector(reserve)
// // checkout = selector(checkout)
// // checkin = selector(checkin)

// let status = document.querySelector("#status")
// let reserve = document.querySelector("#reserve")
// let checkout = document.querySelector("#checkout")
// let checkin = document.querySelector("#checkin")

// checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.color
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'


const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const libraryStatus = document.querySelectorAll('.status');
const reserve = document.querySelectorAll('.reserve');
const checkOut = document.querySelectorAll('.checkout');
const checkIn = document.querySelectorAll('.checkin');

checkIn[0].style.color = '';
libraryStatus[0].style.color = STATUS_MAP.overdue.color;
reserve[0] = STATUS_MAP.overdue.canReserve ? reserve[0].enabled = true : reserve[0].disabled = true;
checkOut[0] = STATUS_MAP.overdue.canCheckout ? checkOut[0].enabled = true : checkOut[0].disabled = true;
checkIn[0] = STATUS_MAP.overdue.canCheckIn ? checkIn[0].enabled = true : checkIn[0].disabled = true;

checkIn[1].style.color = ''
libraryStatus[1].style.color = STATUS_MAP.reserved.color
reserve[1] = STATUS_MAP.reserved.canReserve ? reserve[1].enabled = true : reserve[1].disabled = true
checkOut[1] = STATUS_MAP.reserved.canCheckout ? checkOut[1].enabled = true : checkOut[1].disabled = true
checkIn[1] = STATUS_MAP.reserved.canCheckIn ? checkIn[1].enabled = true : checkIn[1].disabled = true

checkIn[2].style.color = ''
libraryStatus[2].style.color = STATUS_MAP.shelf.color
reserve[2] = STATUS_MAP.shelf.canReserve ? reserve[2].enabled = true : reserve[2].disabled = true
checkOut[2] = STATUS_MAP.shelf.canCheckout ? checkOut[2].enabled = true : checkOut[2].disabled = true
checkIn[2] = STATUS_MAP.shelf.canCheckIn ? checkIn[2].enabled = true : checkIn[2].disabled = true