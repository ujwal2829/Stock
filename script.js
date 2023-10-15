const settings = {
	async: true,
	crossDomain: true,
	url: 'https://indian-stock-exchange-api1.p.rapidapi.com/stock_price/?symbol=TATAMOTORS',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'indian-stock-exchange-api1.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});