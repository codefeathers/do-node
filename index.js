const axios = require('axios');

const {
	token
} = require('./config')

const domainList = require('./lib/domains/list');
const domainCreate = require('./lib/domains/create');
const domainRetrieve = require('./lib/domains/retrieve');
const domainDelete = require('./lib/domains/deleteDomain');

const instance = axios.create({
	baseURL: 'https://api.digitalocean.com/v2',
	timeout: 10000,
	headers: {
		'Authorization': `Bearer ${token}`
	}
});

const domain = {
	List: (instance) => domainList(instance),
	Create: (instance, domainObject) => domainCreate(instance, domainObject),
	Retrieve: (instance, domainName) => domainRetrieve(instance, domainName),
	Delete: (instance, domainName) => domainDelete(instance, domainName),
};

module.exports.domain = domain;