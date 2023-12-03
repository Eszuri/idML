let url = "https://api.hmdan214.repl.co/api/game/mobile-legends?userid=122802144&zoneid=9902";

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.setRequestHeader("Access-Control-Allow-Origin", "https://api.hmdan214.repl.co");

fetch(url, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, X-Auth-Token, Origin, Authorization",
        "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH",
        "Access-Control-Allow-Credentials": false,
        "X-Content-Type-Options": "nosniff",
        "Content-Type": "application/json",
        "Access-Control-Expose-Headers": "Content-Type, Date, Expect-Ct, Host, Replit-Cluster, Strict-Transport-Security, X-Powered-By, Transfer-Encoding"
    }
})
    .then(ident => ident.json())
    .then(data => {
        console.log(data)
        document.querySelector('p').innerText = data.result.name;
    })

