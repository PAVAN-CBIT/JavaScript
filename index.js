<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery</title>
    <script src="../node_modules/jquery/dist/jquery.js"></script>
    <script>
        $(function(){
           var Categories=['All','Electronics','Footwear','Fashion','Travel'];
           $.each(Categories,function(key,value){

           
            $(`<option>${value}</option>`).appendTo("select");

           })
        })
    </script>
</head>
<body>
   <ol>

   </ol>
   <select name="" id=""></select>
</body>
</html>
