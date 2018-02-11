const axios = require('axios');
const path = require('path');

const {
	token
} = require(path.resolve(path.dirname(require.main.filename), 'config'));

const domainList = require('./lib/domains/list');
const domainCreate = require('./lib/domains/create');
const domainRetrieve = require('./lib/domains/retrieve');
const domainDelete = require('./lib/domains/delete');
const listDomainRecords = require('./lib/domain-records/list');
const createDomainRecords = require('./lib/domain-records/create');
const retrieveDomainRecords = require('./lib/domain-records/retrieve');
const updateDomainRecords = require('./lib/domain-records/update');
const deleteDomainRecords = require('./lib/domain-records/delete');

const instance = axios.create({
	baseURL: 'https://api.digitalocean.com/v2',
	timeout: 10000,
	headers: {
		'Authorization': `Bearer ${token}`
	}
});

module.exports = {
	domain: {
		List: () => domainList(instance),
		Create: (domainObject) => domainCreate(instance, domainObject),
		Retrieve: (domainObject) => domainRetrieve(instance, domainObject),
		Delete: (domainObject) => domainDelete(instance, domainObject),
		Records: {
			List: (domainObject) => listDomainRecords(instance, domainObject),
			Create: (domainObject, domainRecords) => createDomainRecords(instance, domainObject, domainRecords),
			Retrieve: (domainObject, recordId) => retrieveDomainRecords(instance, domainObject, recordId),
			Update: (domainObject, recordId) => updateDomainRecords(instance, domainObject, recordId),
			Delete: (domainObject, recordId) => deleteDomainRecords(instance, domainObject, recordId),
		}
	}
};