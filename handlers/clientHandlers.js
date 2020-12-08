const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');

// Get all clients
const getAllClients = () => {
  return { status: 'ok', data: clients };
  // return { status: 'error', data: 'An error occured' };
};

// Get client by ID
const getClientById = (id) => {
  const index = clients.findIndex(client => client.id === id);
  
  if (index !== -1) {
    return { status: 'ok', data: clients[index] };
  } else {
    return { status: 'error', data: 'Client not found'};
  }
}

// Add new client
const addClient = (query) => {
  // Check for duplicate email address
  if (clients.findIndex(client => client.email === query.email) === -1) {
    const newClient = {
      id: uuidv4(),
      isActive: Boolean(query.isactive),
      age: Number(query.age),
      name: query.name,
      gender: query.gender,
      company: query.company,
      email: query.email,
      phone: '+1 (' + query.phone.slice(0, 3) + ') ' + query.phone.slice(3, 6) + '-' + query.phone.slice(6, 10),
      address: query.address
    }
    clients.push(newClient);
    return { status: 'ok', data: newClient.id };
  } else {
    return { status: 'error', data: 'Client not added: Duplicate email address' };
  }
}

// Delete a client
const deleteClient = (id) => {
  // Check if client exists
  const index = clients.findIndex(client => client.id === id);

  if (index !== -1) {
    clients.splice(index, 1);
    return { status: 'ok', data: 'Client record deleted'};
  } else {
    return { status: 'error', data: 'Client not found'};
  }
}

module.exports = { getAllClients, getClientById, addClient, deleteClient };
