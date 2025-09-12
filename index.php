<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<h1>Submitted Info</h1>";
    echo "First Name: " . $_POST['firstName'] . "<br>";
    echo "Middle Name: " . $_POST['middleName'] . "<br>";
    echo "Last Name: " . $_POST['lastName'] . "<br>";
    echo "Suffix: " . $_POST['suffix'] . "<br>";
    echo "Contact Number: " . $_POST['contactNo'] . "<br>";
    echo "Email: " . $_POST['email'] . "<br>";
    echo "Course: " . $_POST['course'] . "<br>";
    echo "Batch: " . $_POST['batch'] . "<br>";
    echo "ID: " . $_POST['id'] . "<br>";
} else {
    echo "No data submitted!";
}
?>
