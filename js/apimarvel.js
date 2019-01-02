var marvel ={
    render: function() {
        var url = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=fc51643a4cf9e4d81fd2a8127e2b16cf&hash=adc0117d8a368db1568d7aafe9b836a7';
       var message = document.getElementById("message"); 
        
       $.ajax({
            url: url,
            type: 'GET',
            beforeSend: function() {
                message.innerHTML ="Loading...";
            },
            complete: function(){
                message.innerHTML ="Successfully done!";
            }
       });
    }
};

marvel.render();