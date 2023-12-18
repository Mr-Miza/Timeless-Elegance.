function getOrdersFromAPI(){
    //Create HttpClient Props

    const settings = {
        async: true,
        crossDomain: true,
        url: 'localhost:3000/order',
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'd67a5eab10msh444b6ea21047b91p12c928jsn78f03f342a27',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: {
            "productId": "Harry Potter" , 
            "quantity": 20.00
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    }).fail();
}