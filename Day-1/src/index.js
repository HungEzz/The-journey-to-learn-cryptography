function encrypt(text, shift){
    let result = "";
    for(let i= 0 ; i< text.length; i++){
       let char = text[i];
       if(char >= "A" && char <= "Z"){
          let ch = ((char.charCodeAt(0) + shift - 65) % 26 + 65);   
          result += String.fromCharCode(ch);
       }else{
          let ch = ((char.charCodeAt(0) + shift - 97) % 26 + 97);
          result += String.fromCharCode(ch);
        }
    }
    console.log("Text before encrypt: %s", text);
    console.log("shift: %d", shift)
    console.log("Text after encrypt: %s", result);
    return result;
}

function decrypt(text, shift){
    let result = "";
    for(let i= 0; i < text.length; i++ ){
        let char = text[i];
        if(char >= "A" && char <= "Z"){
            let ch = ((char.charCodeAt(0) - shift - 65) % 26 + 65);
            result += String.fromCharCode(ch);
        }else {
            let ch = ((char.charCodeAt(0) - shift - 97) % 26 + 97);
            result += String.fromCharCode(ch);
        }
    }

    console.log("Text before decrypt: %s", text);
    console.log("shift: %d", shift)
    console.log("Text after decrypt: %s", result);
}
function main(){
    let text = "hello"
    const shift = 4;
    let text_encrypt = encrypt(text, shift);
    console.log("--------------------------------");
    decrypt(text_encrypt, shift);
}

main()