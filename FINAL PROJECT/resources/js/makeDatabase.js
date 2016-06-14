var Arr = [];
var count = 0;
var question = [
	'Bạn thường ăn gì vào buổi sáng?',	
	'Bạn thường uống gì vào buổi chiều?',
	'Khi bạn muốn FEEL HIGH, bạn chơi gì?',
	'Nếu một con kiến cắn bạn, bạn sẽ làm gì?',
	'Bạn dành bao nhiêu thời gian để ngủ trong ngày?',	
	'Bạn thích nuôi thú cưng nào?',
	'Tiệc sinh nhật của mình, bạn thích gì?',
	'Nếu bị điểm C, D, F, bạn sẽ làm gì?',
	'Mỗi khi ra quyết định, bạn có phân vân lắm không?',
	'Khi duyệt Web, bạn sẽ xem Web nào?',
	'Nếu bị phát hiện trốn học đi chơi, bạn sẽ làm gì?',
	'Bạn thích "chém gió" về vấn đề gì?',
	'Khi ai đó khen bạn xinh "voãi", bạn có có suy nghĩ gì?',
	'Khi chơi Dota, đồng đội ngu quá, bạn sẽ làm gì?',
	'Nếu bạn bị người khác trễ hẹn, bạn sẽ?',
	'Bạn sẽ mặc gì khi đi chơi với "ấy"?'];
var answer = [
	'Bánh mì@Cơm sườn', 
	'Cà phê@Nước ngọt', 
	'Cỏ@Đá', 
	'Giết nó@Cho nó cắn',
	'8 tiếng@4 tiếng',
	'Chó@Gà',
	'Ăn thật nhiều@Được nhiều tiền',
	'Khóc rất nhiều và cố gắng@Mặc kệ, không quan tâm',
	'Run chết được@YOLO EASY',
	'Mương 14@BBC',
	'Khóc và xin lỗi, hứa không tái phạm@Lần sau trốn học cẩn thận hơn',
	'Chính trị xã hội@Chuyện không nên nói nơi công cộng',
	'Mình lúc nào chả xinh@Mắt thằng kia chắc có vấn đề',
	'Chửi thề liên tục@Kiên nhẫn và im lặng',
	'Giận dỗi và ăn vạ@Lát gặp là biết tay!',
	'Âu phục@Jean'];
var result = [
	 'Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Cho Chang', 
	 'Ginny Weasley', 'Fred Weasley and George Weasley',	 
	 'Vincent Crabbe and Gregory Goyle', 'Draco Malfoy', 'Voldemort',
	 'Albus Dumbledore', 'Severus Snape', 'Minerva McGonagall', 'Rubeus Hagrid'];

function randomNumber(length, nameArr)
{
	var Rand = new Uint32Array(1);
	window.crypto.getRandomValues(Rand);
	Rand = Rand[0];
	/* https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues */
	Rand = Rand % length + 1;
	if (nameArr == 'question')
	{
		for (var i = 0; i<=count; i++)		
			if (Arr[i] == Rand)			
				Rand = randomNumber(length, 'question');
	}
	return Rand;
}

function makeQuestionArr()
{
	for (var i=0; i<5;i++)
	{
		count = i;
		Arr[i] = randomNumber(question.length, 'question');
	}	
}