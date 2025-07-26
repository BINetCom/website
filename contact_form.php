<?php
// Forcer l'encodage UTF-8
header('Content-Type: text/html; charset=utf-8');

// Fonction de nettoyage
function clean_input($data) {
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

// Validation et nettoyage
$company     = clean_input($_POST['company'] ?? '');
$name        = clean_input($_POST['name'] ?? '');
$email       = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone       = clean_input($_POST['phone'] ?? '');
$service     = clean_input($_POST['service'] ?? '');
$message = clean_input($_POST['message'] ?? '');

// Vérification des champs requis
if (!$company || !$name || !$email || !$phone || !$service || !$message) {
    echo "Tous les champs sont obligatoires.";
    exit;
}

// Construire le message à envoyer
$to      = 'contact@binet.com.tn'; 
$subject = "Nouvelle demande depuis le site web";
$message = "
Vous avez reçu une nouvelle demande via le formulaire de contact :

Entreprise : $company
Nom et Prénom : $name
Email : $email
Téléphone : $phone
Service demandé : $service
Message :
$message
";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Envoi de l'email
if (mail($to, $subject, $message, $headers)) {
    echo "<script>
        alert('✅ Merci ! Votre demande a bien été envoyée.');
        window.location.href = 'index.html';
    </script>";
} else {
    echo "<script>
        alert('❌ Une erreur est survenue lors de l\\'envoi. Veuillez réessayer.');
    </script>";
}
?>
