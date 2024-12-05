<?php
// Database connection details
$servername = "localhost";
$username = "root"; // Default username for XAMPP
$password = "";     // Default password for XAMPP
$dbname = "expance_management";

// Connect to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and get form data
    $email = $conn->real_escape_string(trim($_POST['email']));
    $user = $conn->real_escape_string(trim($_POST['username']));
    $pass = $_POST['password'];
    
    // Hash the password for security
    $hashed_password = password_hash($pass, PASSWORD_DEFAULT);

    // Check if the username or email already exists
    $checkUserQuery = "SELECT * FROM users1 WHERE username = '$user' OR email = '$email'";
    $result = $conn->query($checkUserQuery);

    if ($result->num_rows > 0) {
        // If username or email exists, show a message
        echo "<script>alert('Username or Email already exists. Please choose another.'); window.location.href='signup_page.html';</script>";
    } else {
        // Insert new user into the database
        $insertQuery = "INSERT INTO users1 (email, username, password) VALUES ('$email', '$user', '$hashed_password')";
        
        if ($conn->query($insertQuery) === TRUE) {
            // Redirect to login page after successful signup
            header("Location: Login.html");
            exit();
        } else {
            echo "Error: " . $insertQuery . "<br>" . $conn->error;
        }
    }
}

// Close the database connection
$conn->close();
?>
