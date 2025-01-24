
document.getElementById("check-btn").onclick = function() {
    let userInput = document.getElementById("text-input").value.trim();
    let resultElement = document.getElementById("result"); // Get input and trim spaces

    if (userInput === "") { 
        alert("Please input a value"); // Show alert if input is empty
        return;
    }



let cleanInput = userInput.toLowerCase().replace(/[^a-z0-9]/g, "")

if(check(cleanInput)){
    resultElement.textContent = userInput + " is a palindrome";}
else{
    resultElement.textContent = userInput + " is not a palindrome" 
}
}



function check(userInput){

    let reversedInput = userInput.split('').reverse().join(''); // Reverse the string
    return userInput === reversedInput;
}
