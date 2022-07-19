require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remain upgrade give arena orange term'; 
let testAccounts = [
"0x5a14bb7b168f8cbeab9613baa25d3c7fcd944f4d2f4ae03f1abefd8e8119822c",
"0xf4b2042dac88d1e2fc93e0f5aefcf46a69ba9091a6ca3f84a4a6355c997abf90",
"0x98457252d226bb685347391a5ff716b4d3c7d860b31e3ab83b6a8d011bad95a8",
"0xe0bfbf63fe958ab48e9eb6fd64cb6721388270bc8b911418c00e210b5b277835",
"0x9b5ba8ebf0cbbdcf0d08e4f6023fd4a00e6da1d5be06cbcef78a76261d18c632",
"0x885d1304f7381228923979372141e9f31dff7b730a2ee5c1ecf76b78d404563d",
"0x6a380786e8a559435e6752fa5465cfbb69311fc47d6effe67ee16ad5c12ea30f",
"0xf900f0095f6b9f5629d15b57c93c2174b87a97820c5a676db38f795862e0019c",
"0x1b7948b0994786329519e0956f064c47c94f23d7cfa696c7774e4e96bb0f8071",
"0x3a06cf2a3ed4ded07713f5ddd5b0d06351cc6314a5cb0500073f7389242aec37"
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

