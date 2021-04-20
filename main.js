const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input"); 
const info = document.querySelector(".info");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 

if(SpeechRecognition) {
  console.log("Your Browser supports speech Recognition");
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;

  searchForm.insertAdjacentHTML("beforeend", '<button type="button" class="btn btn-dark"> <i class="fas fa-microphone"></i></button>');
  searchFormInput.style.paddingRight = "50px";

  const micBtn = searchForm.querySelector("button");
  const micIcon = micBtn.firstElementChild;

  micBtn.addEventListener("click", micBtnClick);
  function micBtnClick() {
    if(micIcon.classList.contains("fa-microphone")) { 
      recognition.start(); 
    }
    else {
      recognition.stop();
    }
  }

  recognition.addEventListener("start", startSpeechRecognition);
  function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    searchFormInput.focus();
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition);
  function endSpeechRecognition() {
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");
    searchFormInput.focus();
    console.log("Speech recognition service disconnected");
  }

  recognition.addEventListener("result", resultOfSpeechRecognition);
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    
    
    if(transcript.toLowerCase().trim()==="detener") {
      recognition.stop();
    }
    else if(transcript.toLowerCase().trim()==="ayuda del sitio") {
      open("ayuda.html");
    }
    else if(transcript.toLowerCase().trim()==="salir del sitio") {
      salir ();
    }
    
    else if(!searchFormInput.value) {
      searchFormInput.value = transcript;
    }

    else {
        if(transcript.toLowerCase().trim()==="go") {
            searchForm.setAttribute('action','')

            window.open("//https://www.wolframalpha.com/input/?i="+searchFormInput.value);
            window.open("https://www.qwant.com/?q="+searchFormInput.value);
            window.open("https://yandex.com/search/?text="+searchFormInput.value);
            window.open("https://www.apple.com/us/search/"+searchFormInput.value);
            window.open("https://search.aol.com/aol/search;_ylt=AwrJ61WpPH5gE7UAimxoCWVH;_ylc=X1MDMTE5NzgwMzg4MARfcgMyBGZyAwRmcjIDc2ItdG9wLXNlYXJjaARncHJpZANGLnBBam56c1NSRzV5UVZrMDZ3NDZBBG5fcnNsdAMwBG5fc3VnZwMxMARvcmlnaW4Dc2VhcmNoLmFvbC5jb20EcG9zAzAEcHFzdHIDBHBxc3RybAMwBHFzdHJsAzQEcXVlcnkDaG9sYQR0X3N0bXADMTYxODg5MTQyNA--?q=");

      }
      else if(transcript.toLowerCase().trim()==="busca en uno") {
        
        open("//https://www.wolframalpha.com/input/?i="+searchFormInput.value);
      }
      else if(transcript.toLowerCase().trim()==="busca en dos") {
        
        open("https://www.qwant.com/?q="+searchFormInput.value);
      }
      else if(transcript.toLowerCase().trim()==="busca en tres") {
        
        open("https://yandex.com/search/?text="+searchFormInput.value);
      }
      else if(transcript.toLowerCase().trim()==="busca en cuatro") {
        
        open("https://www.apple.com/us/search/"+searchFormInput.value);
      }
      else if(transcript.toLowerCase().trim()==="busca en cinco") {
        
        open("https://search.aol.com/aol/search;_ylt=AwrJ61WpPH5gE7UAimxoCWVH;_ylc=X1MDMTE5NzgwMzg4MARfcgMyBGZyAwRmcjIDc2ItdG9wLXNlYXJjaARncHJpZANGLnBBam56c1NSRzV5UVZrMDZ3NDZBBG5fcnNsdAMwBG5fc3VnZwMxMARvcmlnaW4Dc2VhcmNoLmFvbC5jb20EcG9zAzAEcHFzdHIDBHBxc3RybAMwBHFzdHJsAzQEcXVlcnkDaG9sYQR0X3N0bXADMTYxODg5MTQyNA--?q="+searchFormInput.value);
      }
      else if(transcript.toLowerCase().trim()==="borrar") {
        searchFormInput.value = "";
      }
     
      else {
        searchFormInput.value = transcript;
      }
    }
    
  }
}
else {
  console.log("Your Browser does not support speech Recognition");
  info.textContent = "Your Browser does not support Speech Recognition";
}
var pregunta = true;
window.alert = salir;
function salir () {
  var respuesta;

  if ( pregunta ) {
    respuesta = confirm ( '¿Deseas salir del sitio?' );

    if ( respuesta ) {
      window.close();
      }
    } else {
      return false;
    }
  }
