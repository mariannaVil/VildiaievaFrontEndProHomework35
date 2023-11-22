const parse = (data) => JSON.parse(data);
let xml;

function requestData(method, path,callback) {
    const xml = new XMLHttpRequest();
    xml.open(method, path);
    xml.send();

    xml.addEventListener('readystatechange', () => {
        if (xml.readyState === 4 && xml.status < 400) {
            const response = parse(xml.response);
            resultArray.push(...response.children);
            callback(xml);
            checkAndPrintResult();
        }
    });

}

let resultArray = [];

function checkAndPrintResult(xml) {
    if (xml.readyState === 4) {
        console.log(resultArray);
    }
}

requestData('GET','request/data.json', checkAndPrintResult);
requestData('GET','request/data2.json', checkAndPrintResult);