<?php
    $filename = 'email-list.txt';
    $user_entry = htmlspecialchars($_POST['name']). "," . htmlspecialchars($_POST['email']) ."\n";

    // Let's make sure the file exists and is writable first.
    if (is_writable($filename)) {

        // In our example we're opening $filename in append mode.
        // The file pointer is at the bottom of the file hence
        // that's where $somecontent will go when we fwrite() it.
        if (!$handle = fopen($filename, 'a')) {
            echo "Cannot open file ($filename)";
            exit;
        }

        // Write $somecontent to our opened file.
        if (fwrite($handle, $user_entry) === FALSE) {
            echo "Cannot write to file ($filename)";
            exit;
        }

        fclose($handle);

    }
?>