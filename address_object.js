const address = {
  street: "Helm Street",
  city: "Campinas",
  zipCode: 101,
};

function showAddress(address) {
  for (let key in address)
    console.log(`${key}: ${address[key]}`);
}

showAddress(address);
