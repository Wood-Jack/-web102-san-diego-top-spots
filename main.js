
$(document).ready(function(){
// write your code here



//downloading the contents of the json file

    $.getJSON('data.json', function(data){
       
    // creating for loop to loop through creation of the table.

        for(var i = 0; i < data.length ; i++){

            var table = document.getElementById('table');
            var row = table.insertRow(i);

            var names = row.insertCell(0);
            var description = row.insertCell(1);
            var location = row.insertCell(2);

            names.innerText = data[i].name;
            description.innerText = data[i].description;
            location.innerText = ("https://www.google.com/maps?q=33.09745,-116.99572" + data[i].location + "'>'" + 'Link' + "</a>");


        }

    })

});