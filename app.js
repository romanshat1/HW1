 
function sum(){
    var result;
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);


	if (isNaN(a)== true) a=0;
	if (isNaN(b)== true) b=0;
   
    if (a % 2 === 0) {
    		result = (a * b);
     }else
    result = (b + a);
    document.getElementById('result_multi').innerHTML = result;
   
}

$('.element').mouseleave(function(e){
	$('#coord-live').html('Наведіть на картинку');
});

$('.element').mousemove(function(e){
	var y = $(this).width() / 3;
	var target = this.getBoundingClientRect();
	var x = e.clientX - target.left;
	var y = e.clientY - target.top;
	
	if (x < 299 && y < 299) {
		$('#coord-live').html('перша частина');
	} else if (x > 299 && y < 299) {
		$('#coord-live').html('друга частина');
	} else if (x > 299 && y > 299) {
		$('#coord-live').html('третя частина');
	} else if (x < 299 && y > 299) {
		$('#coord-live').html('чеверта частина');
	} else {
		$('#coord-live').html('майже центр');
	}
});

/*
  document.getElementById("table-price-box").addEventListener("input", function (e) {
  var inp = e.target;
  
  if (inp.tagName === "INPUT") {
    //var tr = inp.closest("tr");
    var tr = inp.parentElement.parentElement;
    tr.querySelector(".sum").textContent = tr.querySelector(".price").textContent * inp.value;
   
  }
});
*/

window.onclick = function onclickRadio() {
  var nameRadio = document.getElementsByName('nameRadio');
  for (var i = 0; i < nameRadio.length; i++) {
    if (nameRadio[i].type === 'radio' && nameRadio[i].checked) {
        rezultatRadio = nameRadio[i].value;       
    }
  }
  document.getElementById('rezultatRadio').innerHTML = rezultatRadio;
}




  
/*
	document.getElementById('result_ocinka').innerHTML = answer;
  }
*/






/*     
<input class="numberInput" type="text">
  <p></p>

  <script>
    const input = document.querySelector('.numberInput');
    const para = document.querySelector('p');

    function squared(num) {
      return num * num;
    }

    function cubed(num) {
      return num * num * num;
    }

    function factorial(num) {
      let x = num;
      while(x > 1) {
        num *= x-1;
        x--;
      }

      return num;
    }

    input.onchange = function() {
      const num = input.value;
      if(isNaN(num)) {
        para.textContent = 'You need to enter a number!';
      } else {
        para.textContent = num + ' squared is ' + squared(num) + '. ' +
                           num + ' cubed is ' + cubed(num) + '. ' +
                           num + ' factorial is ' + factorial(num) + '.';
      }
    }
    */