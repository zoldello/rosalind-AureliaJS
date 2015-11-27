// view model
import {inject} from 'aurelia-framework';
import DNA from './../util/dNA';
import _ from './../../jspm_packages/npm/underscore@1.8.3/underscore-min'
import {Base} from './base.js'

export class ComplementingDNAStrand extends Base {
	constructor() {	
		super();
		this.dNA = DNA;

		// view model's model from Base.js	
		this.title = 'Complementing a Strand of DNA';
		this.input = '';
		this.output = '';
		this.inputLabel = 'DNA String';
		this.outputLabel = "complement"
		this.placeholder = 'DNA String';
		this.processButtonText = 'complement';
		this.Id = 'REVC';
	}
	
	process () {
		this.output = this.reverseComplement(this.input);
		let x = 0;
	}

	reverseComplement(input) {
		if (input.length === 0 || input.length > 1000) {
			super.error();	
			return `DNA String must be between 1 and 1000 and not: ${input.length}`;
		} 

		if (!this.dNA.isValid(input, true)) {
			super.error();
			return 'DNA String is not valid';
		}

		return this.dNA.reverseComplement(input, true);	
	}
}