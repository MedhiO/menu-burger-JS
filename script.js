// Sélectionne le bouton par son ID
const boutonLike = document.getElementById("like");

// Initialise une variable d'état
let etat = "j-aime"; // "j-aime" par défaut

// Ajoute un gestionnaire d'événements pour le clic sur le bouton
boutonLike.addEventListener("click", function() {
  if (etat === "j-aime") {
    boutonLike.textContent = "Je n'aime pas"; // Change le texte
    etat = "je-naime-pas"; // Change l'état
  } else {
    boutonLike.textContent = "J'aime"; // Change le texte de retour
    etat = "j-aime"; // Reviens à l'état initial
  }
});