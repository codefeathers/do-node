const Delete = async (instance, domainName) => {
	res = await instance.post(`/domains/${domainName}`);
	return (res.data);
};

module.exports = Delete;