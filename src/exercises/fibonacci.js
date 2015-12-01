// view model
import {inject} from 'aurelia-framework';
import DNA from './../util/dNA';
import _ from './../../jspm_packages/npm/underscore@1.8.3/underscore-min'
import {Base} from './base.js'

export class Fibonacci extends Base {
	constructor() {	
		super();
		this.dNA = DNA;

		// view model's model from Base.js	
		this.title = 'Rabbits and Recurrence Relations';
		this.input = '';
		this.output = '';
		this.inputLabel = 'DNA String';
		this.outputLabel = "Fibonacci (n k)"
		this.placeholder = 'DNA String';
		this.processButtonText = 'Fibonacci Sequence';
		this.Id = 'FIB';
	}
	
	process () {
		this.output = this.sequence(this.input);
	}

	sequence(input) {
		let n, k, numbers = [], sequence = [];	

		super.clearError();

		if (!input || input.length === 0) {
			super.error();	
			return 'DNA String has no characters'
		} 

		input.trim().split(' ').forEach(i => {
			if (!!i ) {
				numbers.push(i)
			}
		}); 

		if (numbers.length !== 2) {
			super.error();
			return 'There must only be two numbers as input, separated by space';
		}	

		n = numbers[0];
		k = numbers[1];

		if (n > 40 ) {
			return 'First number must be less than or equals to: 40';
		}

		if (k > 5) {
			return 'Second number must be less than or equals to 5';
		}

		if (!this.isNumber(n)) {
			super.error();
			return `This input is not a number: ${n} `;
		}

		if (!this.isNumber(k)) {
			super.error();
			return `This input is not a number: ${k}`;
		}


 			for (i = 0; i < n; i++) {
 				if (i === 0) {
 					sequence.push(2);
 				} else if (i === 1) {
 					sequence.push(2 + k);
 				} else {
 					let a = sequence[i-2], 
 						b = sequence[i-2]; 

 					sequence.push( +);
 				}
 			}

 			return sequence[sequence.length - 1];
		
	}

	isNumber(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}

}