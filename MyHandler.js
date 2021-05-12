const fs = require('fs');
const os = require('os');
const queryString = require('querystring');

function start(res) {
    let Body = '<head><meta charset = "UTF-8"/></head>'
    Body += '<body><div>Hello, world <br> I am in the cloud class.</div><br>';
    Body += '<div><a href="/hello"> 페이지</a></div>'
    Body += '<div><a href="/wait">5초대기 페이지</a></div>'
    Body += '<div><a href="/firstHtml">HTML 읽는 페이지</a></div>'
    Body += '<div><a href="/page">handler 없이 "/page"로 매핑하는 페이지</a></div>'
    Body += '<div><a href="/serverInfo">Server 정보를 표시하는 페이지</a></div>'
    Body += '<div><a href="/form">form을 입력하는 페이지</a></div>'
    Body += '<div><a href="/nickname">form으로 넘어온 이름과 별명 표시 페이지</a></div>'
    Body += '<div><a href="/people">JSON을 입력받아 사람 정보를 표시하는 페이지</a></div>'
    Body += '<div><a href="/randomwait"></a></div>'

    Body += '</body>'
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(Body);
    res.end();
}

function hello(res) {
    let Body = 'This is my first web server';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(Body);
    res.end();
}

function wait(res) {
    setTimeout(function() {
        let Body = '= Thanks wait my server';
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(Body);
        res.end();
    }, 5000);
}

function randomwait(res) {
    let waitTime = Math.round(Math.random() * 10000.);
    setTimeout(function() {
        let Body = '=Thanks wait my randomwait server';
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(Body);
        res.end();
    }, 5000);
}

function htmlFile(res, file) {
    Body = fs.readFileSync(file, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(Body);
    res.end();
}

function firstHtml(res) {
    htmlFile(res, './firstHtml.html');
}

function serverInfo(res) {
    info = JSON.stringify(os.cpus());
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(info);
    res.end();
}

function nickname(res, postData) {
    let Body = '<head><meta charset = "UTF-8"/></head>';
    Body += '<div>안녕하세요, ' + queryString.parse(postData).myName + '님.</div>'
    Body += '<div>당신의별명은, ' + queryString.parse(postData).myNick + '입니다..</div>'
    Body += '</html>'
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(Body);
    res.end();
}

function people(res) {
    Body = fs.readFileSync('people.json', 'utf-8');
    obj = JSON.parse(str);
    console.log(obj.name + ": " + obj.house);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(str);
    res.end();
}

exports.start = start;
exports.hello = hello;
exports.wait = wait;
exports.randomwait = randomwait;
exports.firstHtml = firstHtml;
exports.htmlFile = htmlFile;
exports.serverInfo = serverInfo;
exports.nickname = nickname;
exports.people = people;