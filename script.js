// Write all your Javascript here!

function testpro(){

    document.querySelector(".card").style.display= "block";


$.ajax({
	url: `https://techkaro-test.herokuapp.com/api/v1/getdata`,

	success: function(data){
         console.log(data);

        
    document.querySelector(".card").innerHTML=`
		
				
			<div>
			<img class="card-img-top" src="${data.imageURL} alt="Card image cap">
            <p class="text-justify" >${data.date}</p>          
            <h1 class="card-title">${data.info.heading}</h1>                          
			<p class="card-text">${data.info.description}</p>
            

		
			</div>

           <div class="card text-white bg-light mb-3" style="max-width:400px;">
             <div class="card-body">
          <p class="card-title" style="font-weight:bold;">${data.sale.heading}</p>
          <p class="card-text">${data.sale.description}</p>
        </div>
            `

    },
		
		
	
   

	error: function(error){
		console.log(error);
	}

})
};

//<a href="${data.url}" target="_blank"><button class="btn btn-outline-dark btn-sm">Read More</button></a>


function testzh(){

    document.querySelector(".card").style.display= "block";

$.ajax({
	url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh`,

	success: function(data){
         console.log(data);

        
    document.querySelector(".card").innerHTML=`
		
				
			<div>
			<img class="card-img-top" src="${data.imageURL} alt="Card image cap">
            <p class="text-justify" >${data.date}</p>          
            <h1 class="card-title">${data.info.heading}</h1>                          
			<p class="card-text">${data.info.description}</p>
            

		
			</div>

           <div class="card text-white bg-light mb-3" style="max-width:400px;">
             <div class="card-body">
          <p class="card-title" style="font-weight:bold;">${data.sale.heading}</p>
          <p class="card-text">${data.sale.description}</p>
        </div>
            `

    },
		
		
	
   

	error: function(error){
		console.log(error);
	}

})
};




function testur(){

    document.querySelector(".card").style.display= "block";


$.ajax({
	url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur`,

	success: function(data){
         console.log(data);

        
    document.querySelector(".card").innerHTML=`
		
				
			<div>
			<img class="card-img-top" src="${data.imageURL} alt="Card image cap">
            <p class="text-justify" >${data.date}</p>          
            <h1 class="card-title">${data.info.heading}</h1>                          
			<p class="card-text">${data.info.description}</p>
            

		
			</div>

           <div class="card text-white bg-light mb-3" style="max-width:400px;">
             <div class="card-body">
          <p class="card-title" style="font-weight:bold;">${data.sale.heading}</p>
          <p class="card-text">${data.sale.description}</p>
        </div>
            `

    },
		
		
	
   

	error: function(error){
		console.log(error);
	}

})
}