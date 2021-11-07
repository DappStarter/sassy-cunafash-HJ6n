require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture stomach rival ridge coast gesture opera army giggle'; 
let testAccounts = [
"0x9e2fb108bca7896f2dd18e0222f2c84ace0047320bd0422a0be058b04717f2b0",
"0x1cc4bdc56b0be15bd99391c46e231b436981597c33189451ad1bd9736c4395e5",
"0x79ea48f0a7bddc8d35e52cc57a3827b31f567d4fb35f078001f27263c601d129",
"0x2efed4c8311c31f8510877345255adefa2d21f762722336c3b7e9c07379922af",
"0x6063a9b3cb81d4547e3ba1bd7a32fe61e7df5dcad6a02bd14d61a290b5ec6e51",
"0x640dacd9714f55b39c2abf3ec0b4642d7f2096f650f3a8b45b55ba8474153bdc",
"0xc0089cb811362f78d88fd5d42ce109b54c551cf58649e9f4378daa7e3b390432",
"0x4985bf3ae944aa131ab07243aaf99dd7c31c63aedfdd28d2ab7bddda1c0df1d5",
"0x40d26c9572cb26ba28b2da7d7cc9c9fabccdaeb66fedf81a954955bccc482146",
"0xc7ca988c20854703e5148284eee5b0c00f8927c9814794be38d22ea47d92ddd3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

