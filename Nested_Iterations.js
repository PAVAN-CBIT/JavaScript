
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigator</title>
    <script>
        var data = [
            {Category: "Electronics", Products: ["TV", "Mobile"]},
            {Category: "Footwear", Products:["Nike Casuals", "Lee Boot"]}
        ];
        function bodyload(){
           for(var item of data)
           {
               var li = document.createElement("li");
               li.innerHTML = item.Category;
               document.querySelector("ol").appendChild(li);
               for(var product of item.Products)
               {
                   var ul = document.createElement("ul");
                   var ulLi = document.createElement("li");
                   ulLi.innerHTML = product;
                   ul.appendChild(ulLi);
                   document.querySelector("ol").appendChild(ul);
               }
           }
        }
    </script>
 </head>
 <body onload="bodyload()">
    <ol>
 
    </ol>
 
 </body>
