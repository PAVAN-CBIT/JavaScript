<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var categories=['Electronic','Footwear','Fashion'];
        function bodyload(){
            for(var item of categories)
            {
                var li=document.createElement("li");
                li.innerHTML=item;
                document.querySelector("ol").appendChild(li);

                var option=document.createElement("option");
                option.text=item;
                option.value=item;
                document.querySelector("select").appendChild(option);
            }
        }
    </script>
</head>
<body onload="bodyload()">
    <ol>



    </ol>
    <select name="" id="">

    </select>
    
</body>
</html>
