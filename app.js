



function save () {
    var vowels=[];
    var word = [];  
    var bol = false;
    
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
        // vowels.push(input);
        bol = true;
        break;
    }

    }


    if (bol == true)  {
        vowels.push(input);
        document.getElementById("vowel").innerHTML+=". "+vowels + "<br>"

           
    }

    else {
        bol = false;
        word.push(input);
        document.getElementById("word").innerHTML+=". "+word + "<br>"



    }
}




