function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.pantone_value+'</p>\n' +
        '        <div style="background:'+item.color+';">'+item.color+'</div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

// addItem({"id":1,"name":"cerulean","year":2000,"color":"#98B2D1","pantone_value":"15-4020"});

let itemarray = [];
let mycolornew = [];
const displayCont=document.querySelector("#list-items");
const itemsContainer = document.getElementById("list-items");


//  RETRIVING FROM COLORS FROM UNKNOWN SOURCE 

function fetchColorsList(){
  
  fetch('https://reqres.in/api/unknown') 
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

   
      response.json().then(function(data) {
        
        
            for(i=0; i < data ["data"].length; i++) {
                
                //  itemarray[i] = addItem(data['data'][i]); // DISPLAYING FIRST TIME 
                 itemarray[i] = (data['data'][i]);

                console.log(itemarray);
               localStorage.setItem("mycolor", JSON.stringify(data['data']));
              
                       }
                
        })
        // loadColorsFromStorage();

      });
   
  }

  function  loadColorsFromStorage() { 
  
    // alert("im here");
    localStorage.setItem("mycolor", JSON.stringify(itemarray));

    //  LOAD TEH COLORS AGAIN 

    mycolornew =JSON.parse(localStorage.getItem("mycolor"));
    for(let i=0;i<mycolornew.length;i++){
        addItem(mycolornew[i]);
    }
}

//  clear storage
function  clearColorStorage() { 

    localStorage.removeItem("mycolor");
    itemsContainer.innerHTML="";
  
}

//  loadColorsFromStorage();
   fetchColorsList();