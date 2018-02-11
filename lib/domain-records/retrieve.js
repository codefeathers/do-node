const Retrieve = async (instance, domainObject, recordId) => {
	res = await instance.get(`/domains/${domainObject.name}/records/${recordId}`);
	return (res.data);
};

module.exports = Retrieve;