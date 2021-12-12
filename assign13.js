function checkDisplay() {
	var type = document.getElementById("performance");
	console.log(type.value);	
	if (type.value == "Duet") {
		document.getElementById("performer2").style.display = "table-row";
		document.getElementById("performer1").style.display = "table-row";
		document.getElementById("hideF").style.display = "table-row";
		document.getElementById("hideL").style.display = "table-row";
		document.getElementById("hideI").style.display = "table-row";
		document.getElementById("hideHr").style.display = "table-row";
	}
	else
	{
		document.getElementById("performer2").style.display = "none";
		document.getElementById("performer1").style.display = "none";
		document.getElementById("hideF").style.display = "none";
		document.getElementById("hideL").style.display = "none";
		document.getElementById("hideI").style.display = "none";
		document.getElementById("hideHr").style.display = "none";
	}
}


function checkForm() {
	var first = document.getElementById("first_name");
	if (!first.value.length && !isNaN(first.value)) {
		first.focus();
		return false;
	}
	var last = document.getElementById("last_name");
	if (!last.value.length && !isNaN(last.value)) {
		last.focus();
		return false;
	}
	var studentID = document.getElementById("student_id");
	if (!studentID.value.length) {
		studentID.focus();
		return false;
	}
	var room = document.getElementById("room");
	console.log(room.value);
	if (!room.value.length || isNaN(room.value)) {
		room.focus();
		return false;
	}
	var check2 = document.getElementById("performance").value;
	if (check2 == "Duet") {
		var test = checkStudent2();
		console.log(test);
		return checkStudent2();
	}
	return true;	
}

function checkStudent2() {
	var first2 = document.getElementById("first_name_2");
	if (!first2.value.length && !isNaN(first2.value)) {
		first2.focus();
		return false;
	}
	var last2 = document.getElementById("last_name_2");
	if (!last2.value.length && !isNaN(last2.value)) {
		last2.focus();
		return false;
	}
	var studentID2 = document.getElementById("student_id_2");
	if (!studentID2.value.length) {
		studentID2.focus();
		return false;
	}
	return true;
}

function buildQueryString() {
	var queryString="assign13.php?";
	var type = document.getElementById("performance").value;
	var first = document.getElementById("first_name").value;
	var last = document.getElementById("last_name").value;
	var studentID = document.getElementById("student_id").value;
	queryString+="performance="+type+"&first_name="+first+"&last_name="+last+"&student_id="+studentID;

	var first2 = "";
	var last2 = "";
	var studentID2 = "";
	if (type == "Duet")
	{
		first2 = document.getElementById("first_name_2").value;
		last2 = document.getElementById("last_name_2").value;
		studentID2 = document.getElementById("student_id_2").value;
		queryString+="&first_name_2="+first2+"&last_name_2="+last2+"&student_id_2="+studentID2;
	}

	var skill = document.getElementById("skill").value;
	var instrument = document.getElementById("instrument").value;
	var location = document.getElementById("location").value;
	switch(location) {
		case "Agriculture Engineering Building":
			location = "AGM";
			break;
		case "Austin (Mark) Technical and Engineering Building":
			location = "AUS";
			break;
		case "Benson (Ezra Taft) Biological Sciences Building":
			location = "BEN";
			break;
		case "BYU-Idaho Center":
			location = "BCTR";
			break;
		case "Clarke (John L.) Building":
			location = "CLK";
			break;
		case "Hinckley (Gordon B.) Building":
			location = "HIN";
			break;
		case "Kirkham (Oscar A.) Building":
			location = "KRK";
			break;
		case "McKay (David O.) Library":
			location = "MCK";
			break;
		case "Ricks (Thomas E.) Building":
			location = "RKS";
			break;
		case "Romney (George S.) Sciences Building":
			location = "ROM";
			break;
		case "Smith (Joseph Fielding) Building":
			location = "SM";
			break;
		case "Snow (Eliza R.) Performing Arts Center":
			location = "SNO";
			break;
		case "Spori (Jacob) Building":
			location = "SPO";
			break;
		case "Taylor (John) Building":
			location = "TAY";
			break;
	}
	var room = document.getElementById("room").value;
	var time = document.getElementById("time_slot").value;
	queryString+="&skill="+skill+"&instrument="+instrument+"&location="+location+"&room="+room+"&time_slot="+time;
	return queryString;
}


function sendAJAX() { 
	var request;
	var validate = checkForm();
	if(validate	!= true)
	{
		return;
	}//check input fields

	var url = buildQueryString();
	console.log(url);
	var response="";

	//ajax request
	if (window.XMLHttpRequest) {
		request=new XMLHttpRequest();
	}
	else {
		request=new ActiveXObject("Microsoft.XMLHTTP");
	}

	request.onreadystatechange=function() {
		if (request.readyState==4 && request.status==200) {
			response=request.responseText;
			console.log(response);
			document.getElementById("acts").innerHTML+=response;
		}
	}
	request.open("GET",url,true);
	request.send();
	document.getElementById("regform").reset();
}