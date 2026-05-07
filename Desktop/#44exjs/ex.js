const bookings = [
    { id: 4, user: "Imane", city: "Marrakech", property: "Riad Medina", price: 600, nights: 2, status: "confirmed" },
    { id: 2, user: "Sara", city: "Marrakech", property: "Villa Atlas", price: 1200, nights: 2, status: "confirmed" },
    { id: 3, user: "Yassine", city: "Agadir", property: "Beach House", price: 800, nights: 4, status: "pending" },
    { id: 5, user: "Omar", city: "Agadir", property: "Beach House", price: 800, nights: 1, status: "cancelled" },
    { id: 1, user: "Mehdi", city: "Marrakech", property: "Villa Atlas", price: 1200, nights: 3, status: "confirmed" },
    { id: 6, user: "Khadija", city: "Marrakech", property: "Villa Atlas", price: 1200, nights: 5, status: "confirmed" },
    { id: 7, user: "Hamza", city: "Tangier", property: "Sea View Apartment", price: 500, nights: 2, status: "confirmed" },
    { id: 8, user: "Salma", city: "Tangier", property: "Sea View Apartment", price: 500, nights: 3, status: "pending" },
    { id: 9, user: "Anas", city: "Marrakech", property: "Riad Medina", price: 600, nights: 1, status: "confirmed" },
    { id: 10, user: "Nora", city: "Agadir", property: "Beach House", price: 800, nights: 2, status: "confirmed" }
];

let total = bookings.reduce((acc, x) => {
    if (!acc[x.city]) {
        acc[x.city] = 0
    }
    acc[x.city] += 1;
    return acc;
}, {})
console.log(total);