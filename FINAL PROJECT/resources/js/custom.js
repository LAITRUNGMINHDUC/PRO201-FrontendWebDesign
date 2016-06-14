// JavaScript Document
function renderData()
{
	makeQuestionArr();
	var S='';
 	for (var i = 0; i<5; i++)
	{
		var Temp='';
		if (i%2==0)
		{
			Temp += '<section id="Cau'+(i+1)+'" class="background">';
		}
		else
		{
			Temp += '<section id="Cau'+(i+1)+'" class="background2">';
		}		
		Temp += '<section class="content">';
		Temp += '<p>Câu ' +(i+1)+ ': ' + question[Arr[i]-1] + '</p>';	
		//Temp += '<a name="box" href="#Cau'+(i+2)+'">';
		Temp += '<div class="box"><a name="box" href="#Cau'+(i+2)+'">';
		Temp += '<img src="resources/img/ANSWER/'+(Arr[i]-1)+'A.jpg" width="100%" alt=""/>';
		var Answer = answer[Arr[i]-1].split('@');
		Temp += '<h1>' + Answer[0] + '</h1>';
		Temp += '</div></a>';
		Temp += '<div class="box"><a name="box" href="#Cau'+(i+2)+'">';
		Temp += '<img src="resources/img/ANSWER/'+(Arr[i]-1)+'B.jpg" width="100%" alt=""/>';
		Temp += '<h1>' + Answer[1] + '</h1>';
		Temp += '</div>';
		Temp += '</a> </section> <section class="transperent"></section></section>';		
		S = S + Temp;
	}
	//document.getElementById('questionsBlock').innerHTML = S;
	$('#questionsBlock').html(S);
}

function renderResult()
{
	var Rand = randomNumber(result.length, '') - 1;
	var tag = document.getElementById('resultImg');
	tag.src = 'resources/img/RESULT/'+result[Rand]+'.jpg';
	var tag = document.getElementById('resultText');
	tag.innerHTML = 'Bạn là: ' + result[Rand];
}
