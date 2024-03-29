function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!name.trim() || !message.trim()) {
    alert('Veuillez renseigner votre nom et écrire votre message');
    return;
  }

  if (!email.trim() || !emailRegex.test(email)) {
    alert('Veuillez renseigné un email valide s\'il vous plaît');
    return;
  }


  const body = `Nom: ${name} \n E-mail: ${email} \n Message: ${message}`;


  Email.send({
    SecureToken: "Votre_Token(smtps.js .com)",
    To: 'Votre_addresse_mail',
    From: 'Votre_addresse_mail',
    Subject: "Nouvelle demande depuis le formulaire de contact",
    Body: body,
  }).then(
    message => {
      if (message === 'OK') {
        Swal.fire({
          title: "Bien reçu!",
          text: "Votre message à bien été envoyé!",
          icon: "success"
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops... désolé",
          text: "Y'a eu un petit problème! BIP BIP BOP",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    })
}
