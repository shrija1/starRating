		const stars=document.querySelectorAll('.star');
		const output=document.querySelector('.output');
		for(x=0;x<stars.length;x++)
		{
			stars[x].starValue=(x+1);
			//stars[x].addEventListener('click',function(){
			//})
			["click","mouseover","mouseout"].forEach(function(e){
				stars[x].addEventListener(e,showRating);
			})
		}
		function showRating(e){
			let type=e.type;
			let starValue=this.starValue;
			if(type==='click'){
				if(starValue>1){
					output.innerHTML="You rated this "+starValue+" stars.";
				}
			}
			stars.forEach(function(elem,index){
				if(type==='click'){
					if(index<starValue){
						elem.classList.add("orange");
					}
					else{
						elem.classList.remove("orange");
					}
				}
				else if(type==='mouseover'){

					if(index<starValue){
						elem.classList.add("yellow");
					}
					else{
						elem.classList.remove("yellow");
					}
				}
				else if(type==='mouseout'){
					elem.classList.remove("yellow");
				}
			})
		}
		function nextPage(){
			window.location.reload();
		}