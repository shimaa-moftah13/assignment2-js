
  function randomQuoete(){  
     var names =["Yasser Arafat..", "Hassan Rouhani..", "Rachel Corrie..", "Mohammed Morsi.."];
 
     var quetes = ["The victory march will continue until the Palestinian flag flies in Jerusalem and in all of Palestine.",
                   "I believe the land of Palestine will be returned to owners of the land with the help of God.",
                   "I think freedom for Palestine could be an incredible source of hope to people struggling all over the world. I think it could also be an incredible inspiration to Arab people in the Middle East, who are struggling under undemocratic regimes which the U.S. supports.",
                   "The Zionists have no right to the land of Palestine. There is no place for them on the land of Palestine."];
                
     var num = Math.floor(Math.random() * quetes.length);

     document.getElementById("quoteAuthor").innerHTML = names[num];
     document.getElementById("quoteCap").innerHTML = quetes[num];
}

