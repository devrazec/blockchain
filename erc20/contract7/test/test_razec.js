let Razec = artifacts.require('./Razec.sol');

contract('Razec', function(accounts) {

    let razec;
    let firstAccount;

    beforeEach(async function() {
        firstAccount = accounts[0];
        razec = await Razec.new();
    });
});