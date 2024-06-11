interface BuisnessPartner {
    name : string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: number;
}

type EmployeeDetails = Identity & Contact;

type Customer = BuisnessPartner & Identity;

let c: Customer = {
    id: 1,
    name: "Lukas",
    credit: 12
}