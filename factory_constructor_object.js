let address = createAddress("Helm Street", "Campinas", 101);

let anotherAddress = new Address("Narnii", "São José dos Campos", 101);

console.log(address);
console.log(anotherAddress);

// Factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

// Constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
