<?php
error_reporting(~E_NOTICE);
	$type=$_GET["performance"];
	$first1=$_GET["first_name"];
	$last1=$_GET["last_name"];
	$studentID1=$_GET["student_id"];
	$first2=$_GET["first_name_2"];
	$last2=$_GET["last_name_2"];
	$studentID2=$_GET["student_id_2"];
	$skill=$_GET["skill"]; //make easier to read
	$instrument=$_GET["instrument"];
	$location=$_GET["location"];
	$room=$_GET["room"]; // show only last 4 digits
	$time=$_GET["time_slot"]; 

	$row = "";
	$row = $row."<tr><td>".$type."</td>";
	$row = $row."<td>".$skill."</td>";
	$row = $row."<td>".$first1." ".$last1."</td>";
	$row = $row."<td>".$studentID1."</td>";
	$row = $row."<td>".$instrument."</td>";
	$row = $row."<td>".$location."</td>";
	$row = $row."<td>".$room."</td>";
	$row = $row."<td>".$time."</td></tr>";

	if ($first2 != NULL && $type = "Duet") {
		$row = $row."<tr><td>".$type."</td>";
		$row = $row."<td>".$skill."</td>";
		$row = $row."<td>".$first2." ".$last2."</td>";
		$row = $row."<td>".$studentID2."</td>";
		$row = $row."<td>".$instrument."</td>";
		$row = $row."<td>".$location."</td>";
		$row = $row."<td>".$room."</td>";
		$row = $row."<td>".$time."</td></tr>";
	}
	$file = "/home/enr19004/public_html/week13/data/data.txt";
	echo $row;
	file_put_contents($file, $row, FILE_APPEND | LOCK_EX);
?>