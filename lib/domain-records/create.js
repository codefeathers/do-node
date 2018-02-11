const Create = async (instance, domainObject, domainRecords) => {
	res = await instance.post(`/domains/${domainObject.name}/records`, domainRecords);
	return (res.data);
};

module.exports = Create;