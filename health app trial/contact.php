<!DOCTYPE html>
<html>
<head>
    <title>Contact Details</title>
</head>
<body>
    <h1>Contact Details</h1>

    <?php
    // Database connection details
    $servername = "127.0.0.1";
    $username = "";
    $password = "";
    $database = "contact";

    // Create a connection to the database
    $conn = new mysqli($servername, $username, $password, $database);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Function to save a new contact
    function saveContact($name, $phone, $email) {
        global $conn;
        $sql = "INSERT INTO contacts (name, phone, email) VALUES ('$name', '$phone', '$email')";

        if ($conn->query($sql) === TRUE) {
            echo "Contact details saved successfully.<br>";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    // Function to display all saved contacts
    function displayContacts() {
        global $conn;
        $sql = "SELECT * FROM contacts";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "Contact List:<br>";
            while ($row = $result->fetch_assoc()) {
                echo "Name: " . $row["name"] . "<br>";
                echo "Phone: " . $row["phone"] . "<br>";
                echo "Email: " . $row["email"] . "<br><br>";
                echo "  Message: " . $row["message"] . "<br><br>";
            }
        } else {
            echo "No contacts saved.<br>";
        }
    }

    // Handle form submission
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $contactName = $_POST["name"];
        $contactPhone = $_POST["phone"];
        $contactEmail = $_POST["email"];
        $contactMessage = $_POST["message"];

        saveContact($contactName, $contactPhone, $contactEmail, $contactMessage);
    }
    ?>

    <h2>Add a New Contact</h2>
    <form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
        Name: <input type="text" name="name"><br>
        Phone: <input type="text" name="phone"><br>
        Email: <input type="text" name="email"><br>
        Message: <input type="text" name="message"><br>
        <input type="submit" value="Save Contact">
    </form>

    <h2>Contacts</h2>
    <?php
    displayContacts();
    ?>

    <?php
    // Close the database connection
    $conn->close();
    ?>
</body>
</html>