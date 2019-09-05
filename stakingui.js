// Update functions
function updateValues(customer) {
	customer = customer.toLowerCase();
	
	// Request all values
	getTotalLendingBalance();
	getStakepool();
	
	// if current user is event emitter, update his values
	if (customer == currentAddress) {
		getMyDeposit();
		getMyTokens();	// call from exchange contract
	}
}

// total lending supply
function updateTotalLendingBalance(tokenBalance) {
	tokenBalance = web3.fromWei(tokenBalance, 'ether');
	tokenBalance = numeral(tokenBalance).format('0,0');
	document.getElementById('lendingbalance').innerHTML = tokenBalance + " DYT";
}

// lending stakepool
function updateStakepool(stakepool) {
	stakepool = stakepool / 10;		// from base 1000 to 100
	document.getElementById('stakepool').innerHTML = stakepool + " %";
}

// customers active deposit
function updateMyDeposit(myDeposit) {
	myDeposit = web3.fromWei(myDeposit, 'ether');
	myDeposit = numeral(myDeposit).format('0,0.00');
	document.getElementById('mydeposit').innerHTML = myDeposit + " DYT";
}

// customers token in exchange
function updateMyTokens(myTokens) {
	myTokens = web3.fromWei(myTokens, 'ether');
	myTokens = numeral(myTokens).format('0,0.00');
	document.getElementById('tokenbalance').innerHTML = myTokens + " DYT";
}

// customers active profits
function updateMyProfit(myProfit) {
	myProfit = web3.fromWei(myProfit, 'ether');
	myProfit = numeral(myProfit).format('0,0.000000');
	document.getElementById('profit').innerHTML = myProfit + " DYT";
}
