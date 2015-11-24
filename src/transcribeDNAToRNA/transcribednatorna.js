// view model
import {inject} from 'aurelia-framework';
import RNA from './../util/rNA';
import DNA from './../util/dNA';
import _ from './../../jspm_packages/npm/underscore@1.8.3/underscore-min'


export class TranscribeDNAToRNA {
	constructor() {	
		this.dNA = DNA;
		this.rNA = RNA; 

		// view model's version of model	
		this.dNAString = '';
		this.rNAString = '';
	}

	transcribe() {
		let result = null;

		if (this.dNAString.length === 0 || this.dNAString.length > 1000) {
			this.rNAString = `DNA String must be between 1 and 1000 and not: ${dNAString.length}`;			
			return;
		} 

		if (!this.dNA.isValid(this.dNAString, true)) {
			this.rNAString = 'DNA String is not valid';
			return;
		}

		result = this.rNA.transcribe(this.dNAString, true);

		this.rNAString = (_.isEmpty(result)) 
		? 'Invalid RNA String' : 
			result;
	}
}