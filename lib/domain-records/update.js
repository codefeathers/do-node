const Update = async (instance, domainObject, recordId) => {
	res = await instance.put(`/domains/${domainObject.name}/records/${recordId}`);
	return (res.data);
};

module.exports = Update;