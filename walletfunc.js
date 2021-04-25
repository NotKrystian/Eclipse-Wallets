if (typeof web3 !== 'undefined') { web3 = new Web3(web3.currentProvider); } else { 
  web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545")); }

//var bal = web3.fromWei(web3.eth.getBalance(web3.eth.coinbase));



function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

let minABI = [
  {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[],
    "name":"decimals",
    "outputs":[{"name":"decimals","type":"uint8"}],
    "type":"function"
  }
];

const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

function reverseNum(num) {
    return (
    parseFloat(
        num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
    )
}

function addStr(str, index, stringToAdd){
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
}

window.o1 = 0;
window.o2 = 0;
window.o3 = 0;
window.o4 = 0;
window.o5 = 0;
window.o6 = 0;
window.o7 = 0;
window.o8 = 0;
window.o9 = 0;
window.o10 = 0;
window.o11 = 0;
window.o12 = 0;
window.o13 = 0;
window.o14 = 0;
window.o15 = 0;
window.o16 = 0;
window.o17 = 0;
window.o18 = 0;
window.o19 = 0;
window.o20 = 0;
window.o21 = 0;
window.o22 = 0;
window.o23 = 0;
window.o24 = 0;
window.o25 = 0;
window.o26 = 0;
window.o27 = 0;
window.o28 = 0;
window.o29 = 0;
window.o30 = 0;
window.o31 = 0;
window.o32 = 0;
window.o33 = 0;
window.o34 = 0;
window.o35 = 0;
window.o36 = 0;
window.o37 = 0;
window.o38 = 0;
window.o39 = 0;
window.o40 = 0;
window.o41 = 0;
window.o42 = 0;
window.o43 = 0;
window.o44 = 0;
window.o45 = 0;
window.o46 = 0;
window.o47 = 0;
window.o48 = 0;
window.o49 = 0;
window.o50 = 0;

window.v1 = 0;
window.v2 = 0;
window.v3 = 0;
window.v4 = 0;
window.v5 = 0;
window.v6 = 0;
window.v7 = 0;
window.v8 = 0;
window.v9 = 0;
window.v10 = 0;
window.v11 = 0;
window.v12 = 0;
window.v13 = 0;
window.v14 = 0;
window.v15 = 0;
window.v16 = 0;
window.v17 = 0;
window.v18 = 0;
window.v19 = 0;
window.v20 = 0;
window.v21 = 0;
window.v22 = 0;
window.v23 = 0;
window.v24 = 0;
window.v25 = 0;
window.v26 = 0;
window.v27 = 0;
window.v28 = 0;
window.v29 = 0;
window.v30 = 0;
window.v31 = 0;
window.v32 = 0;
window.v33 = 0;
window.v34 = 0;
window.v35 = 0;
window.v36 = 0;
window.v37 = 0;
window.v38 = 0;
window.v39 = 0;
window.v40 = 0;
window.v41 = 0;
window.v42 = 0;
window.v43 = 0;
window.v44 = 0;
window.v45 = 0;
window.v46 = 0;
window.v47 = 0;
window.v48 = 0;
window.v49 = 0;
window.v50 = 0;

window.bal = 0;



const forwarderOrigin = 'http://localhost:9011'

const initialize = () => {




    const burn = document.getElementById('getBurn');
    const circulating = document.getElementById('getCirc');
    const burnps = document.getElementById('burnPs');
    const circps = document.getElementById('circPs');

    tokenAddress = "0x375483cfa7fc18f6b455e005d835a8335fbdbb1f";
    walletAddress = "0x000000000000000000000000000000000000dead";
    const contract = new web3.eth.Contract(minABI, tokenAddress);
    contract.methods.balanceOf(walletAddress).call().then(function (balance) {
        decimals = 9
        balance = (balance / (10**decimals));
        console.log(balance.toString());
        burn.innerHTML = balance.toString(); 
        TotalSupply = 1000000000000000;
        csp = TotalSupply - balance;
        console.log(csp.toString());
        circulating.innerHTML = csp.toString();
        perburn = ((balance / TotalSupply) * 100).toFixed(2);
        percirc = ((csp / TotalSupply) * 100).toFixed(2);
        burnps.innerHTML = perburn.toString();
        circps.innerHTML = percirc.toString();

    });

  const popt = document.getElementById('pop');
  const totalReward = document.getElementById('totalRewards');
  const onboardButton = document.getElementById('connectButton');
  const getAccountsButton = document.getElementById('getAccounts');
  const getAccountsResult = document.getElementById('getAccountsResult');
  const bnbbal = document.getElementById('getBal');

  async function getData() {
    const wallet = sessionStorage.getItem("walletId");
    console.log(wallet);
    const url = "https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=0x375483CfA7Fc18F6b455E005D835A8335FbdbB1f&address=" + wallet + "&sort=dsc&apikey=T3ZQF3TWYAHAZ8III6Z31163UH6CTFT4PI";
    const response = await fetch(url);
    const data = await response.json();
    let { result } = data;
    console.log(result);
    var resultCount = parseInt(Object.keys(result).length) - 1;
    
    /*BLKN1 = result[0].blockNumber;

    if(resultCount >= 0) {
        console.log(result[0].blockNumber);
    }
    if(resultCount >= 1) {
        console.log(result[1].blockNumber);
    }
    if(resultCount >= 2) {
        console.log(result[2].blockNumber);
    }
    if(resultCount >= 3) {
        console.log(result[3].blockNumber);
    }
    if(resultCount >= 4) {
        console.log(result[4].blockNumber);
    }
    if(resultCount >= 5) {
        console.log(result[5].blockNumber);
    }
    if(resultCount >= 6) {
        console.log(result[6].blockNumber);
    }
    BLKNL = result[resultCount].blockNumber;*/
    //const api_url = "https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=0x375483CfA7Fc18F6b455E005D835A8335FbdbB1f&startblock=" + BLKN1 + "&endblock=" + BLKNL + "&sort=asc&apikey=T3ZQF3TWYAHAZ8III6Z31163UH6CTFT4PI";
    async function getTrans() {
        const response1 = await fetch(url);
        const data1 = await response1.json();
        let { result } = data1;
        console.log(result);
        const filterr = [{label: 'to', value: wallet}];
        const filtered = result.filter(item => filterr.every(filter => item[filter.label] === filter.value))
        console.log(filtered);
        resultCount = Object.keys(filtered).length;
        if(resultCount >= 1) {
            let { value } = filtered[0];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v1 = complete;
        }
        if(resultCount >= 2) {
            let { value } = filtered[1];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v2 = complete;
        }
        if(resultCount >= 3) {
            let { value } = filtered[2];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v3 = complete;
        }
        if(resultCount >= 4) {
            let { value } = filtered[3];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v4 = complete;
        }
        if(resultCount >= 5) {
            let { value } = filtered[4];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v5 = complete;
        }
        if(resultCount >= 6) {
            let { value } = filtered[5];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v6 = complete;
        }
        if(resultCount >= 7) {
            let { value } = filtered[6];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v7 = complete;
        }
        if(resultCount >= 8) {
            let { value } = filtered[7];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v8 = complete;
        }
        if(resultCount >= 9) {
            let { value } = filtered[8];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v9 = complete;
        }
        if(resultCount >= 10) {
            let { value } = filtered[9];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v10 = complete;
        }
        if(resultCount >= 11) {
            let { value } = filtered[10];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v11 = complete;
        }
        if(resultCount >= 13) {
            let { value } = filtered[11];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v12 = complete;
        }
        if(resultCount >= 13) {
            let { value } = filtered[12];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v13 = complete;
        }
        if(resultCount >= 14) {
            let { value } = filtered[13];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v14 = complete;
        }
        if(resultCount >= 15) {
            let { value } = filtered[14];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v15 = complete;
        }
        if(resultCount >= 16) {
            let { value } = filtered[15];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v16 = complete;
        }
        if(resultCount >= 17) {
            let { value } = filtered[16];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v17 = complete;
        }
        if(resultCount >= 18) {
            let { value } = filtered[17];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v18 = complete;
        }
        if(resultCount >= 19) {
            let { value } = filtered[18];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v19 = complete;
        }
        if(resultCount >= 20) {
            let { value } = filtered[19];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v20 = complete;
        }
        if(resultCount >= 21) {
            let { value } = filtered[20];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v21 = complete;
        }
        if(resultCount >= 22) {
            let { value } = filtered[21];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v22 = complete;
        }
        if(resultCount >= 23) {
            let { value } = filtered[22];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v23 = complete;
        }
        if(resultCount >= 24) {
            let { value } = filtered[23];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v24 = complete;
        }
        if(resultCount >= 25) {
            let { value } = filtered[24];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v25 = complete;
        }
        if(resultCount >= 26) {
            let { value } = filtered[25];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v26 = complete;
        }
        if(resultCount >= 27) {
            let { value } = filtered[26];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v27 = complete;
        }
        if(resultCount >= 28) {
            let { value } = filtered[27];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v28 = complete;
        }
        if(resultCount >= 29) {
            let { value } = filtered[28];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v29 = complete;
        }
        if(resultCount >= 30) {
            let { value } = filtered[29];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v30 = complete;
        }
        if(resultCount >= 31) {
            let { value } = filtered[30];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v31 = complete;
        }
        if(resultCount >= 32) {
            let { value } = filtered[31];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v32 = complete;
        }
        if(resultCount >= 33) {
            let { value } = filtered[32];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v33 = complete;
        }
        if(resultCount >= 34) {
            let { value } = filtered[33];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v34 = complete;
        }
        if(resultCount >= 35) {
            let { value } = filtered[34];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v35 = complete;
        }
        if(resultCount >= 36) {
            let { value } = filtered[35];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v36 = complete;
        }
        if(resultCount >= 37) {
            let { value } = filtered[36];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v37 = complete;
        }
        if(resultCount >= 38) {
            let { value } = filtered[37];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v38 = complete;
        }
        if(resultCount >= 39) {
            let { value } = filtered[38];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v39 = complete;
        }
        if(resultCount >= 40) {
            let { value } = filtered[39];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v40 = complete;
        }
        if(resultCount >= 41) {
            let { value } = filtered[40];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v41 = complete;
        }
        if(resultCount >= 42) {
            let { value } = filtered[41];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v42 = complete;
        }
        if(resultCount >= 43) {
            let { value } = filtered[42];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v43 = complete;
        }
        if(resultCount >= 44) {
            let { value } = filtered[43];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v44 = complete;
        }
        if(resultCount >= 45) {
            let { value } = filtered[44];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v45 = complete;
        }
        if(resultCount >= 46) {
            let { value } = filtered[45];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v46 = complete;
        }
        if(resultCount >= 47) {
            let { value } = filtered[46];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v47 = complete;
        }
        if(resultCount >= 48) {
            let { value } = filtered[47];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v48 = complete;
        }
        if(resultCount >= 49) {
            let { value } = filtered[48];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v49 = complete;
        }
        if(resultCount >= 50) {
            let { value } = filtered[49];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.v50 = complete;
        }


        const filters = [{label: 'from', value: wallet}];
        const filteredArray = result.filter(item => filters.every(filter => item[filter.label] === filter.value))
        console.log(filteredArray);
        resultCount = Object.keys(filteredArray).length;
        console.log(resultCount.toString());
        if(resultCount >= 1) {
            let { value } = filteredArray[0];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o1 = complete;
        }
        if(resultCount >= 2) {
            let { value } = filteredArray[1];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o2 = complete;
        }
        if(resultCount >= 3) {
            let { value } = filteredArray[2];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o3 = complete;
        }
        if(resultCount >= 4) {
            let { value } = filteredArray[3];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o4 = complete;
        }
        if(resultCount >= 5) {
            let { value } = filteredArray[4];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o5 = complete;
        }
        if(resultCount >= 6) {
            let { value } = filteredArray[5];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o6 = complete;
        }
        if(resultCount >= 7) {
            let { value } = filteredArray[6];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o7 = complete;
        }
        if(resultCount >= 8) {
            let { value } = filteredArray[7];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o8 = complete;
        }
        if(resultCount >= 9) {
            let { value } = filteredArray[8];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o9 = complete;
        }
        if(resultCount >= 10) {
            let { value } = filteredArray[9];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o10 = complete;
        }
        if(resultCount >= 11) {
            let { value } = filteredArray[10];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o11 = complete;
        }
        if(resultCount >= 12) {
            let { value } = filteredArray[11];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o12 = complete;
        }
        if(resultCount >= 13) {
            let { value } = filteredArray[12];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o13 = complete;
        }
        if(resultCount >= 14) {
            let { value } = filteredArray[13];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o14 = complete;
        }
        if(resultCount >= 15) {
            let { value } = filteredArray[14];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o15 = complete;
        }
        if(resultCount >= 16) {
            let { value } = filteredArray[15];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o16 = complete;
        }
        if(resultCount >= 17) {
            let { value } = filteredArray[16];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o17 = complete;
        }
        if(resultCount >= 18) {
            let { value } = filteredArray[17];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o18 = complete;
        }
        if(resultCount >= 19) {
            let { value } = filteredArray[18];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o19 = complete;
        }
        if(resultCount >= 20) {
            let { value } = filteredArray[19];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o20 = complete;
        }
        if(resultCount >= 21) {
            let { value } = filteredArray[20];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o21 = complete;
        }
        if(resultCount >= 22) {
            let { value } = filteredArray[21];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o22 = complete;
        }
        if(resultCount >= 23) {
            let { value } = filteredArray[22];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o23 = complete;
        }
        if(resultCount >= 24) {
            let { value } = filteredArray[23];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o24 = complete;
        }
        if(resultCount >= 25) {
            let { value } = filteredArray[24];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o25 = complete;
        }
        if(resultCount >= 26) {
            let { value } = filteredArray[25];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o26 = complete;
        }
        if(resultCount >= 27) {
            let { value } = filteredArray[26];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o27 = complete;
        }
        if(resultCount >= 28) {
            let { value } = filteredArray[27];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o28 = complete;
        }
        if(resultCount >= 29) {
            let { value } = filteredArray[28];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o29 = complete;
        }
        if(resultCount >= 30) {
            let { value } = filteredArray[29];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o30 = complete;
        }
        if(resultCount >= 31) {
            let { value } = filteredArray[30];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o31 = complete;
        }
        if(resultCount >= 32) {
            let { value } = filteredArray[31];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o32 = complete;
        }
        if(resultCount >= 33) {
            let { value } = filteredArray[32];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o33 = complete;
        }
        if(resultCount >= 34) {
            let { value } = filteredArray[33];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o34 = complete;
        }
        if(resultCount >= 35) {
            let { value } = filteredArray[34];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o35 = complete;
        }
        if(resultCount >= 36) {
            let { value } = filteredArray[35];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o36 = complete;
        }
        if(resultCount >= 37) {
            let { value } = filteredArray[36];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o37 = complete;
        }
        if(resultCount >= 38) {
            let { value } = filteredArray[37];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o38 = complete;
        }
        if(resultCount >= 39) {
            let { value } = filteredArray[38];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o39 = complete;
        }
        if(resultCount >= 40) {
            let { value } = filteredArray[39];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o40 = complete;
        }
        if(resultCount >= 41) {
            let { value } = filteredArray[40];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o41 = complete;
        }
        if(resultCount >= 42) {
            let { value } = filteredArray[41];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o42 = complete;
        }
        if(resultCount >= 43) {
            let { value } = filteredArray[42];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o43 = complete;
        }
        if(resultCount >= 44) {
            let { value } = filteredArray[43];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o44 = complete;
        }
        if(resultCount >= 45) {
            let { value } = filteredArray[44];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o45 = complete;
        }
        if(resultCount >= 46) {
            let { value } = filteredArray[45];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o46 = complete;
        }
        if(resultCount >= 47) {
            let { value } = filteredArray[46];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o47 = complete;
        }
        if(resultCount >= 48) {
            let { value } = filteredArray[47];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o48 = complete;
        }
        if(resultCount >= 49) {
            let { value } = filteredArray[48];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o49 = complete;
        }
        if(resultCount >= 50) {
            let { value } = filteredArray[49];
            var str = value;
            str = str.substring(0, str.length-5);
            valuei = reverseString(str);
            let stringToAdd = ".";
            new_value = addStr(valuei.toString(), 4, stringToAdd)
            complete = parseFloat(reverseString(new_value));
            console.log(complete.toString());
            window.o50 = complete;
        }

        minus = (o1 / 0.94) + (o2 / 0.94) + (o3 / 0.94) + (o4 / 0.94) + (o5 / 0.94) + (o6 / 0.94) + (o7 / 0.94) + (o8 / 0.94) + (o9 / 0.94) + (o10 / 0.94) + (o11 / 0.94) + (o12 / 0.94) + (o13 / 0.94) + (o14 / 0.94) + (o15 / 0.94) + (o16 / 0.94) + (o17 / 0.94) + (o18 / 0.94) + (o19 / 0.94) + (o20 / 0.94) + (o21 / 0.94) + (o22 / 0.94) + (o23 / 0.94) + (o24 / 0.94) + (o25 / 0.94) + (o26 / 0.94) + (o27 / 0.94) + (o28 / 0.94) + (o29 / 0.94) + (o30 / 0.94) + (o31 / 0.94) + (o32 / 0.94) + (o33 / 0.94) + (o34 / 0.94) + (o35 / 0.94) + (o36 / 0.94) + (o37 / 0.94) + (o38 / 0.94) + (o39 / 0.94) + (o40 / 0.94) + (o41 / 0.94) + (o42 / 0.94) + (o43 / 0.94) + (o44 / 0.94) + (o45 / 0.94) + (o46 / 0.94) + (o47 / 0.94) + (o48 / 0.94) + (o49 / 0.94) + (o50 / 0.94);
        plus = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10 + v11 + v12 + v13 + v14 + v15 + v16 + v17 + v18 + v19 + v20 + v21 + v22 + v23 + v24 + v25 + v26 + v27 + v28 + v29 + v30 + v31 + v32 + v33 + v34 + v35 + v36 + v37 + v38 + v39 + v40 + v41 + v42 + v43 + v44 + v45 + v46 + v47 + v48 + v49 + v50;
        rewards = (plus - minus);
        totalRewards = (sessionStorage.getItem("walletBalance") - rewards).toFixed(3);
        totalReward.innerHTML = "Approx. " + totalRewards.toString() + " ECP in Rewards";
        console.log("Approximately " + totalRewards + " ECP in Rewards");
        console.log("minus = " + minus.toString());
        console.log("plus = " + plus.toString());
        pop = ((totalRewards / sessionStorage.getItem("walletBalance")) * 100).toFixed(3);
        popt.innerHTML = pop + "%";
    }
    getTrans();
  }

  const MetaMaskClientCheck = () => {
      onboardButton.onclick = onClickConnect;
      onboardButton.disabled = false;
  };

  const onClickConnect = async () => {
    try {
      await ethereum.request({ method: 'eth_requestAccounts' });
      onboardButton.innerText = 'Connected';
    } catch (error) {
      console.error(error);
    }
  };
  MetaMaskClientCheck();
  getAccountsButton.addEventListener('click', async () => {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    getAccountsResult.innerHTML = accounts[0] || 'Not able to get accounts';
    tokenAddress = "0x375483cfa7fc18f6b455e005d835a8335fbdbb1f";
    walletAddress = accounts[0].toString();
    let storage = accounts[0].toString();
    sessionStorage.setItem("walletId", storage);
    const contract = new web3.eth.Contract(minABI, tokenAddress);
    contract.methods.balanceOf(walletAddress).call().then(function (balance) {
        decimals = 9
        balance = (balance / (10**decimals));
        console.log(balance.toString());
        bnbbal.innerHTML = balance.toString() + " ECP";
        let balaa = balance;
        sessionStorage.setItem("walletBalance", balaa);
    });
    /*async function getbala() {
        const walletbal_api = "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x375483CfA7Fc18F6b455E005D835A8335FbdbB1f&address=" + storage + "&tag=latest&apikey=T3ZQF3TWYAHAZ8III6Z31163UH6CTFT4PI"
        const response2 = await fetch(walletbal_api);
        const data2 = await response2.json();
        let { result } = data2;
        var str = result;
        str = str.substring(0, str.length-5);
        valuei = reverseNum(parseInt(str));
        let stringToAdd = ".";
        new_value = addStr(valuei.toString(), 2, stringToAdd)
        complete = reversedNum(new_value);
        let balaa = complete.toString();
        sessionStorage.setItem("walletBalance", balaa);
    };*/
    //bnbbal.innerHTML = sessionStorage.getItem("walletBalance").toString();
    totalReward.innerHTML = "Pulling Rewards Data...";
    //getbala();
    getData();
  });


}
window.addEventListener('DOMContentLoaded', initialize)
