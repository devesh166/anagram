function is_anagram(s1,s2){
var string1  =s1.toLowerCase();
var string2  =s2.toLowerCase();

var result1=join(bubble_Sort(split(string1)));
var result2=join(bubble_Sort(split(string2)));
//console.log(result1);
//console.log(result2);
if(result1==result2){
    console.log(true);
}else{
    console.log(false);
}


 

}


function join (a){
    var length = a.length;
    var text ="";
    for(var i=0;i<length;i++){
        text += a[i];
    }
    return text;
}

function split(s1){

    var a = [];
    var s1length =s1.length;
    //var s2length= s2.lengh;
for(var i=0;i<s1length;i++){


    a[i] =s1.charAt(i);
    //console.log(a[i]);

}
 
return a;
}



function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}



 
  is_anagram('cellar', 'recall');   
 is_anagram('arm', 'elbow');       

