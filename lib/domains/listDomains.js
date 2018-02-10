const List = async (instance) => {
	res = await instance.get(`/domains`);
	return(res.data);
};

module.exports = List;