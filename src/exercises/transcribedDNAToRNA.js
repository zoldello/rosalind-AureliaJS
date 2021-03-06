// view model
import {inject} from 'aurelia-framework';
import RNA from './../util/rNA';
import DNA from './../util/dNA';
import _ from './../../jspm_packages/npm/underscore@1.8.3/underscore-min'
import {Base} from './base.js'

export class TranscribeDNAToRNAViewModel extends Base {
	constructor() {	
		super();
		this.dNA = DNA;
		this.rNA = RNA; 

		// view model's model from Base.js	
		this.title = 'Transcribing DNA into RNA';
		this.input = '';
		this.output = '';
		this.inputLabel = 'DNA String';
		this.outputLabel = "Transcibed RNA"
		this.placeholder = 'DNA String';
		this.processButtonText = 'Transcibe';
		this.Id = 'RNA';
	}
	
	process () {
		this.output = this.transcribe(this.input);
	}

	transcribe(input) {
		let result = null;

		super.clearError();

		if (input.length === 0 || input.length > 1000) {
			super.error();	
			return `DNA String must be between 1 and 1000 and not: ${input.length}`;
		} 

		if (!this.dNA.isValid(input, true)) {
			super.error();
			return 'DNA String is not valid';
		}

		result = this.rNA.transcribe(input, true);

		return (_.isEmpty(result)) ? 'Invalid RNA String' : result;
	}
}