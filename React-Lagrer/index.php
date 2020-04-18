<?php
	$brukernavn = $_POST['brukernavn'];
	$poeng = $_POST['poeng'];

	// Database connection
	$conn = new mysqli('mysql-ait.stud.idi.ntnu.no','omerj','tzoJlBGq','Scoreboard');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into Scoreboard(brukernavn, poeng) values(?, ?)");
		$stmt->bind_param("si", $brukernavn, $poeng);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>
