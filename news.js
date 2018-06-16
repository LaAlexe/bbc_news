(function () {
	
   document.addEventListener("DOMContentLoaded", function(event) {

    // 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=fa8d13cf28f149a49087260af4b55b58', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  /*alert( xhr.responseText ); // responseText -- текст ответа.*/

  var answer = JSON.parse(xhr.responseText);
  

  var Arr = answer.articles;


  for (var i=0; i<Arr.length; i++){
 
       //console.log(Arr[i]);

  var title= Arr[i].title;
  //console.log(title);
 var x= Arr[i].urlToImage;
 //console.log(x);
 var description= Arr[i].description;
 //console.log(description);
  var date= Arr[i].publishedAt;
//console.log(date);
  var div = document.createElement('div');
    //console.log(div);
  div.className = "alert alert-success";
  div.innerHTML = title;
  document.body.appendChild(div);

  var img = document.createElement("img");
  img.src = x;
document.body.appendChild(img);
  //console.log(img);
 var p = document.createElement('p');
    //console.log(div);
  p.className = "alert alert-success";
  p.innerHTML = description;
  document.body.appendChild(p);

  var span = document.createElement('span');
    //console.log(span);
  span.className = "alert alert-success";
  span.innerHTML = date;
  document.body.appendChild(span);
  }
}



 	
  });
}());