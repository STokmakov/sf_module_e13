
fetch('http://localhost:3000/people')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.write('Hello, webpack!!'+"<BR>"+"<BR>"+"DATA JSON:  "+JSON.stringify(data));
  })
  .catch((error) => {
    console.error('Ошибка загрузки JSON:', error);
  }); 
