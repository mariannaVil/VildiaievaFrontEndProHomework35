const parse = (data) => JSON.parse(data);

const xml1 = new XMLHttpRequest();
xml1.open('GET', 'request/data.json');
xml1.send();

const xml2 = new XMLHttpRequest();
xml2.open('GET', 'request/data2.json');
xml2.send();

let resultArray = [];

function checkAndPrintResult() {
    if (xml1.readyState === 4 && xml2.readyState === 4) {
        console.log(resultArray);
    }
}

xml1.addEventListener('readystatechange', () => {
    if (xml1.readyState === 4) {
        const response = parse(xml1.response);
        resultArray.push(...response.children);
        

        checkAndPrintResult();
    }
});

xml2.addEventListener('readystatechange', () => {
    if (xml2.readyState === 4) {
        const response = parse(xml2.response);
        resultArray.push(...response.children);


        checkAndPrintResult();
    }
});