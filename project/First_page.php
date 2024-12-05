<?php
// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the action value from the submitted form
    $action = $_POST['action'];
    
    // Redirect based on the action
    if ($action === 'signup') {
        header("Location: signup_page.html");
        exit();
    } elseif ($action === 'login') {
        header("Location: login.html");
        exit();
    }
}
?>
