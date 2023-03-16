const express = require("express");
const { faker } = require('@faker-js/faker');

const app = express();
const port = 8000;

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};

const createUser = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
    }
    return newFake
}

const createCompany = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
    }
}
    
const newFakeUser = createUser();
console.log(newFakeUser);

app.listen( port, () => console.log(`Listening on port: ${port}`) );
