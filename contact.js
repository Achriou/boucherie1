let formulaire = document.formBloc;

let utilisateur = formulaire.utilisateur;

let email = formulaire.email;

let motDepasse = formulaire.motDepasse;

let  utilisateurError = document.getElementById("utilisateur-error");

let popup = document.getElementById("valid-popup");

function contacter() {
  
    if(utilisateur.value == "" || utilisateur.value.trim() == ""){
        utilisateurError.innerHTML="<p>Ce champ est requis</p>";
        utilisateurError.classList.remove("success");
        utilisateurError.classList.add("error");
    }else if(utilisateur.value.trim().length < 2){
        utilisateurError.innerHTML="<p>le nom de famille doit faire minimum 2 caractères</p>";
        utilisateurError.classList.remove("success");
        utilisateurError.classList.add("error");
    }else if(utilisateur.value.trim() > 60){
        utilisateurError.innerHTML="<p>le nom de famille doit faire maximum 60 caractères</p>";
        utilisateurError.classList.remove("success");
        utilisateurError.classList.add("error");
    }else{
        utilisateurError.innerHTML = "<p>Le champs est valide :)</p>";
        utilisateurError.classList.remove("error");
        utilisateurError.classList.add("success");
    }
    if(utilisateur.value == "ikram"){
     
        popup.classList.remove("hide");
        popup.classList.add("show");
    }
    
    }


function closePopup(){
    popup.classList.remove("hide");
    popup.classList.add("hide");
}

