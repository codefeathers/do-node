const Delete = async (instance, domainObject) => {
	res = await instance.post(`/domains`, {
		"name": domainObject.name,
		"ip_address": domainObject.ip,
	});
	return (res.data);
};

module.exports = Delete;