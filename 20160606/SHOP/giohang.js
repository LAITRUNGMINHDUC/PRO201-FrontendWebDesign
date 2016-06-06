// JavaScript Document
var count=0;// so mat hang da luu trong gio hang
var kichthuoc="S";
//ham nay de lay size chon
function getSize(theselect)
{
//	var tag_se=document.getElementById("size");
	//lay vtri user chon
	var i=theselect.selectedIndex;
	if(i==0) 
	   kichthuoc="S";
	else if(i==1)
	   kichthuoc="M";
	else
	    kichthuoc="L";
    //	kichthuoc=tag_se.options[i].text;		      
	   
}
// ham nay de gan count vao localStorage
function init()
{
	//kiem tra localStorage da co bien count chua
	count=localStorage.getItem("count");
	if(count==null && count=="undefined")
	  {
		  localStorage.setItem("count",0);
	  }
}
//ham nay de tim sanpham co trong localstorage hay chua
function findProduct(ma)
{
	var count=localStorage.getItem("count");
	for(var i=1;i<=count;i++)
	{
		var s=localStorage.getItem(i);
		if(s!==null && s!="undefined")
		{
		   if(i==ma)	
		      return i;
		}
	}
	return 0;
}
function add(ma,ten,hinh,gia)
{
	//alert(ma+","+ten+","+hinh+","+gia+","+kichthuoc);
	var i=findProduct(ma);
	if(i==0)// chua co sp
	{
	   var count=localStorage.getItem("count");
	    count++;
	    localStorage.setItem(count,ma+","+ten+","+hinh+","+gia+","+1+","+kichthuoc);
		localStorage.setItem("count",count);
			
	}
	else// co roi
	{
		alert("sp nay co roi");
		
	}
}
//ham nay de xuat localStorage ra man hinh
function xem()
{
	var sum=0;
	var s="<table id='khung'>";
	s=s+"<tr>";
	s=s+"<th>Masp</th>";
	s=s+"<th>Ten sp</th>";
	s=s+"<th>Hinh</th>";
	s=s+"<th>Gia</th>";
	s=s+"<th>Soluong</th>";
	s=s+"<th>kich thuoc</th>";
	s=s+"<th>Bo chon</th></tr>";
	
	var count=localStorage.getItem("count");
	for(var i=1;i<=count;i++)
	{
		var tam=localStorage.getItem(i);
		if(tam!=null && tam!="undefined")
		{			
			var arr=tam.split(",");
			s=s+"<tr>";
		    s=s+"<td>" +arr[0] +"</td>";// lay ma
			s=s+"<td>" +arr[1] +"</td>";// lay ten
			s=s+"<td><img src='resource/" +arr[2] +"'></td>";// lay hinh
			s=s+"<td>" +arr[3] +"</td>";// lay gia
			s=s+"<td><input type='number' value='"+arr[4] +"' min='1' max='10' onchange='capnhat("+i+", this)' ></td>";// lay so luong
			s=s+"<td>"+ arr[5] +"</td>";// lay kich thuoc
			s=s+"<td><input type='button' value='bo' onclick='bo("+i+")'></td>";
			s=s+"</tr>"; 
			sum=sum+ arr[4]*arr[3];			
		}
	}
	s=s+"</table>";
	s=s+"<p>Tong tien can thenh toan:" +sum +"</p>";
	var tag=document.getElementById("gio");
	tag.innerHTML=s;
}

function bo(i)
{
	localStorage.removeItem(i);
	xem();
}

//i: index trong localStorage theInput: the chua so luong can thay doi
function capnhat(i, theInput)
{
	var s = localStorage.getItem(i);
	if (s != null && s != undefined)
	{
		var arr = s.split(",");
		arr[4] = theInput.value;
		localStorage.setItem(i, arr[0]+","+arr[1]+","+arr[2]+","+arr[3]+","+arr[4]+","+arr[5]);
	}
	xem();
}










