const fs = require('fs');

function start(res) {
    let Body = '<head><meta charset = "UTF-8"/></head>'
    Body += '<body><div>Hello, world <br> I am in the cloud class.</div><br>';
    Body += '<div><a href="/hello"> 페이지</a></div>'
    Body += '<div><a href="/wait">5초대기 페이지</a></div>'
    Body += '<div><a href="/firstHtml">HTML 읽는 페이지</a></div>'
    Body += '<div><a href="/randomwait"></a></div>'
    Body += '<div><a href="/randomwait"></a></div>'
    Body += '<div><a href="/randomwait"></a></div>'
    Body += '<div><a href="/randomwait"></a></div>'
    Body += '<div><a href="/randomwait"></a></div>'
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

exports.start = start;
exports.hello = hello;
exports.wait = wait;
exports.randomwait = randomwait;
exports.firstHtml = firstHtml;