<script>
   navigator.geolocation.getCurrentPosition(function(position){
       document.write(`
       
          Latitude:${position.coords.latitude} <br>
          Longitude:${position.coords.longitude}
       `);
   })
</script>
