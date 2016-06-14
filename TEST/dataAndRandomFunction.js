


function renderQuestion()
{
	
	var q1 = document.getElementById("Question1");
	var q2 = document.getElementById("Question2");
	var q3 = document.getElementById("Question3");
	var q4 = document.getElementById("Question4");
	var q5 = document.getElementById("Question5");
	
	q1.innerHTML = question[Arr[0]];
	q2.innerHTML = question[Arr[1]];
	q3.innerHTML = question[Arr[2]];
	q4.innerHTML = question[Arr[3]];
	q5.innerHTML = question[Arr[4]];
	
	var a1 = document.getElementById("Answer1");
	var a2 = document.getElementById("Answer2");
	var a3 = document.getElementById("Answer3");
	var a4 = document.getElementById("Answer4");
	var a5 = document.getElementById("Answer5");
	
	var A1 = answer[Arr[0]].split('@');
	var A2 = answer[Arr[1]].split('@');
	var A3 = answer[Arr[2]].split('@');	
	var A4 = answer[Arr[3]].split('@');
	var A5 = answer[Arr[4]].split('@');		
		

	for (var i=0; i<A1.length; i++)
	{
		a1.innerHTML = a1.innerHTML +  '<div class="radio"><label><input type="radio" name="optradio1">'+ A1[i] +'</label></div>';
	}
	
	for (var i=0; i<A2.length; i++)
	{
		a2.innerHTML = a2.innerHTML +  '<div class="radio"><label><input type="radio" name="optradio2">'+ A2[i] +'</label></div>';
	}
	
	for (var i=0; i<A3.length; i++)
	{
		a3.innerHTML = a3.innerHTML +  '<div class="radio"><label><input type="radio" name="optradio3">'+ A3[i] +'</label></div>';
	}
	
	for (var i=0; i<A4.length; i++)
	{
		a4.innerHTML = a4.innerHTML +  '<div class="radio"><label><input type="radio" name="optradio4">'+ A4[i] +'</label></div>';
	}
	
	for (var i=0; i<A5.length; i++)
	{
		a5.innerHTML = a5.innerHTML +  '<div class="radio"><label><input type="radio" name="optradio5">'+ A5[i] +'</label></div>';
	}		
	
	var img = document.getElementById("img");
	var Duck = randomNum() + 1;
	img.src = 'data/' + Duck + '.png';
		
}

function reloadData()
{
	renderQuestion();
}

function Submit()
{
	alert("Please wait for processing...");	
	var tag = document.getElementById("Result");	
	tag.style.display = 'block';	
	tag.scrollIntoView();
}

function Reset()
{
	renderQuestion();
	document.getElementById('Ques1').scrollIntoView();
	var tag = document.getElementById("Result");
	tag.style.display = 'none';
}