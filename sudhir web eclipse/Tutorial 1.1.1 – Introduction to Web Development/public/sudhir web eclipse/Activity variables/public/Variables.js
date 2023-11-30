window.addEventListener("load",addlistners);
window.addEventListener("load",initelements);

function initelements()
{
	document.getElementById("TXTFname").focus();
	document.getElementById("TXTlname").disabled=true;
	document.getElementById("msgBTN").disabled=true;
	document.getElementById("TXTadress").disabled=true;
	document.getElementById("TXTcity").disabled=true;
	document.getElementById("TXTstate").disabled=true;
	document.getElementById("TXTzip").disabled=true;
	
}

function addlistners()
{
	document.getElementById("TXTFname").addEventListener("keypress",elementable);
	document.getElementById("msgBTN").addEventListener("click",fullname);

}
function elementable()
{
	firstname= document.getElementById("TXTFname").value;
	if (firstname !="")
		document.getElementById("TXTlname").disabled=false;
		document.getElementById("msgBTN").disabled=false;
		document.getElementById("TXTadress").disabled=false;
		document.getElementById("TXTcity").disabled=false;
		document.getElementById("TXTstate").disabled=false;
		document.getElementById("TXTzip").disabled=false;
}

function fullname()
{
	var firstname;
	var lastname;
	var adress;
	var city;
	var state;
	var zip;

	firstname=document.getElementById("TXTFname").value;
	lastname=document.getElementById("TXTlname").value;
	adress=document.getElementById("TXTadress").value;
	city=document.getElementById("TXTcity").value;
	state=document.getElementById("TXTstate").value;
	zip=document.getElementById("TXTzip").value;
	document.getElementById("SecondPart").innerHTML="I would like to meet" +" " 
	+firstname + " "+lastname +" At "+ adress + ", "+ city + ", "+ state + ", "+ zip   +".</span>";
}