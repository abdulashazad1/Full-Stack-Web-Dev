function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        
        //Write your code here.    
        
     var leapYear = false
     
     if (year%4 === 0){
         leapYear = true    
     }
     
     if (year%100 === 0){
         leapYear = false
     }
     
     if (year%400 === 0){
         leapYear = true
     }
     
     if (leapYear == true){
         return "Leap year."
     } else{
         return "Not leap year."
     }
    
        
    
    /**************Don't change the code below****************/    
    
    }