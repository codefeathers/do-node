const Delete = async (instance, domainObject) => {
	res = await instance.delete(`/domains/${domainObject.name}`);
	return ({ status: 'OK' });
};

module.exports = Delete;