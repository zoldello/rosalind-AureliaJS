// view model
import {inject} from 'aurelia-framework';
import RNA from './util/rNA';
import DNA from './util/dNA';
import _ from './../jspm_packages/npm/underscore@1.8.3/underscore-min'
import {BaseViewModel} from './baseViewModel.js'

export class TranscribeDNAToRNAViewModel extends BaseViewModel {
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
		this.transcribe();
	}

	transcribe() {
		let result = null;

		super.clearError();

		if (this.input.length === 0 || this.input.length > 1000) {
			this.output = `DNA String must be between 1 and 1000 and not: ${input.length}`;
			super.error();			
			return;
		} 

		if (!this.dNA.isValid(this.input, true)) {
			this.output = 'DNA String is not valid';
			super.error();
			return;
		}

		result = this.rNA.transcribe(this.input, true);

		this.output = (_.isEmpty(result)) 
		? 'Invalid RNA String' : 
			result;
	}
}