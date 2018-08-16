'use strict';

	function calc(x) {
		var result = document.querySelector('#res');
		//var button = document.querySelectorAll('button');
		var pushed = x.value
		if (pushed == '=') {
			// Calculate
			result.value= eval(result.value);
			
		} else if (pushed == 'C') {
			// Clear All
			result.value = ' ';
			
		}  else {
				result.value += pushed;
				
			}
		
	}