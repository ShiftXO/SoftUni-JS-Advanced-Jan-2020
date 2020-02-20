function solve(arr, destination) {
    let ticketData = [];
    let comparisore = destination;

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].split('|');
        let ticket = new Ticket(element[0], Number(element[1]), element[2]);
        ticketData.push(ticket);
    }

    ticketData.sort(function(a, b){
        if(a[comparisore] < b[comparisore]) { return -1; }
        if(a[comparisore] > b[comparisore]) { return 1; }
        return 0;
    })

    return ticketData;
}

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'

);


