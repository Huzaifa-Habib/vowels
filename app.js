



function save () {
    var vowels=[];
    var word = [];  
    
    var input = document.getElementById("value").value;
    input = input.toLowerCase();
    var error =document.getElementById("error");

    if (input === "") {
        error.style.color = "red";
        error.innerText = "You can't submit field empty! "
    }

    else{
        error.innerText = " ";
    }

    for (var i = 0; i < input.length; i++ ) {

    if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u"  ){
        vowels.push(input);
        break;
    }

    else  {
        word.push(input)
        
        
    }
}

for (var v =0; v< vowels.length; v++) {
    
    document.getElementById("vowel").innerHTML+=vowels[v] + "<br>"
}
for (var w =0; w< word.length; w++) {

    document.getElementById("word").innerHTML+=word[v] + "<br>"
}



}


