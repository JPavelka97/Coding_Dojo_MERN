const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 8000;

app.get("/api/users/new", (req, res) => {
    res.json({ newUser });
});

app.get("/api/companies/new", (req, res) => {
    res.json({ newCompany });
});

app.get("/api/user/company", (req, res) => {
    res.json({ newUser, newCompany });
});

const createUser = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
    };
    return newFake;
};

const newUser = createUser()

const createCompany = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
    };
    return newFake;
};

const newCompany = createCompany()

app.listen(port, () => console.log(`Listening on port: ${port}`));
