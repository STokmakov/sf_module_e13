fetch("http://localhost:3000/people").then((e=>e.json())).then((e=>{document.write("Hello, webpack!!<BR><BR>DATA JSON:  "+JSON.stringify(e))})).catch((e=>{console.error("Ошибка загрузки JSON:",e)}));