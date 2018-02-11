const Retrieve = async (instance, domainObject) => {
	res = await instance.get(`/domains/${domainObject.name}`);
	return (res.data);
};

module.exports = Retrieve;