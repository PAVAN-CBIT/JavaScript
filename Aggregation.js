 <script>
       

       class BaseClass{

                                        constructor(){
                                            document.write(`Base Class Constructor <br>`);
                                            
                                        }

                                        print(){

                                            document.write(`Base Class print Method <br>`);
                                            
                                        }
                      }


     class Derived{
  

                constructor(){
                    document.write(`Derived Class Constructor <br>`);
                }



                print(){


                    let obj=new BaseClass();
                    obj.print();
                    document.write(`Derived Class Print Method <br>`);
                }






            }


            let obj=new Derived();
            obj.print();
               
    </script>
