const Records = async (instance, domainObject) => {
	res = await instance.get(`/domains/${domainObject.name}/records`);
	return (res.data);
};

module.exports = Records;