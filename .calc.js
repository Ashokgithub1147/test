var num1=document.getElementById("one");
var num2=document.getElementById("two");
var resultField=document.getElementById('resultField');
var form=document.getElementById('XisWhatPercentOfY');

form.addEventListener('submit',function(event){
	if(!num1.value || !num2.value){
		alert("Please enter values in fields");
	}
	else{
		var x=parseFloat(num1.value);
		var y=parseFloat(num2.value);

		var result=x/y;
		var percent=result*100;
		resultField.innerText="Answer: "+percent+"%";
		event.preventDefault();
	}
});