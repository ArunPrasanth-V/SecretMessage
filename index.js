const {hash}=window.location;
const word=(atob(hash.replace("#","")));
if(word){
    document.querySelector(".message-form").classList.add("hide");
    document.querySelector(".final-message").classList.remove("hide");
    document.querySelector("#secretMessage").innerHTML=word;
   console.log(word);
}

document.querySelector('form').addEventListener('submit',(event) =>{

    event.preventDefault();
    document.querySelector(".message-form").classList.add("hide");
    document.querySelector(".link-form").classList.remove("hide");

    const text=document.querySelector("#message-input").value;
    const linkInput=document.querySelector("#link-input");
    linkInput.value=`${window.location}#${btoa(text)}`;
 
    linkInput.select();
});