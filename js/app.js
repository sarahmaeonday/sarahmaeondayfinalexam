var cols =["red", "blue","green","black","yellow"];
var colIndex=0;
function changeColor(){
	var col=document.getElementById("card");
	if(colIndex >=cols.length){
		clIndex=0;
	}
	col.style.backgroundColor =cols[colIndex];
	colIndex++;
}
function changeColor2()
{
	var clrs =parseInt(document.getElementById('Clr').value);

	switch(clrs){
		case 1:
		clrs ='Blue';
		break;
		case 2:
		clrs ='Red';
		break;
		case 3:
		clrs ='Green';
		break;
		case 4:
		clrs ='Black';
		break;
		case 5:
		clrs ='Orange';
		break;
		case 6:
		clrs ='Yellow';
		break;
		default:
	}
	document.getElementById('card').style.backgroundColor = clrs;
}