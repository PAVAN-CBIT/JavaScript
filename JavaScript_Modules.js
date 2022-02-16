<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="module">
                        import PrintDetails,{PrintTitle} from '../Library/library.js';

                        document.querySelector("h2").innerHTML=PrintTitle();
                        document.querySelector("p").innerHTML=PrintDetails(1,'Samsung',45000);

    </script>
</head>
<body>
 <h2></h2>
 <p></p>
</body>
</html>
================================================================================================================================================

 var title="Product Details";
    

   export  function PrintTitle(){
        return title;
    }
  export default   function PrintDetails(id,name,price){

         return `ID=${id}<br>Name=${name}<br>Price=${price}`;

     }
