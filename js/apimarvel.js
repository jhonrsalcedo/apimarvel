let marvel ={
    render: function() {
        var url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=fc51643a4cf9e4d81fd2a8127e2b16cf&hash=adc0117d8a368db1568d7aafe9b836a7';
       var message = document.getElementById("message"); 
       var footer = document.getElementById("footer"); 
       var marvelContainer = document.getElementById("marvel-container");
       $.ajax({
            url: url,
            type: 'GET',
            beforeSend: function() {
                message.innerHTML ="Loading...";
            },
            complete: function(){
                message.innerHTML ="Successfully done!";
            },
            success: function(data){
                footer.innerHTML = data.attributionHTML;
                var html = "";
                html += "<div class='row'>";

                for (var i = 0; i < data.data.results.length; i++) {
                    var datos = data.data.results[i];
           
                // data.data.results.forEach(datos =>{
                //     console.log(datos.name);});
                    html += `<div class='col-md-3'>
                    <a href="${datos.urls[0].url}" target='_blank'> <img src="${datos.thumbnail.path}/portrait_fantastic.${datos.thumbnail.extension}"/> </a>
                   <h3> ${datos.name} </h3>  </div>`;

                    if ((i+1) % 4 == 0) {
                        html += `</div>
                        <div class='row'>`;
                    }
                }
             
                marvelContainer.innerHTML = html;
            },
            error: function(){
                message.innerHTML = "We are sorry!";
            }
       });
    }
};

marvel.render();