const Delete = async (instance, domainObject, recordId) => {
	res = await instance.delete(`/domains/${domainObject.name}/records/${recordId}`);
	return ({status: 'OK'});
};

module.exports = Delete;