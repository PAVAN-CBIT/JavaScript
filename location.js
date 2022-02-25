<script>
   
       document.write(`
       
          Server   :${location.host} <br>

          Protocol:${location.protocol} - ${location.protocol=='http:'?'You are Accessing from Browser':'You are accessing from file Server'} <br>
          
          Port    :${location.port} <br>

          Path    :${location.pathname} <br>
           Url    :${location.href}  

       `);
</script>90
