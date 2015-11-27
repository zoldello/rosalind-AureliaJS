// view model
import {inject} from 'aurelia-framework';
import {DNANucleotides} from './../core/DNANucleotides';
import _ from './../../jspm_packages/npm/underscore@1.8.3/underscore-min'
import {Base} from './base.js'

@inject(DNANucleotides)
export class CountingDNANucleotidesViewModel extends Base {

	constructor(dNANucleotides) {	
		super();
		this.dNANucleotides = dNANucleotides;
	
		// view model's model from Base.js	
		this.title = 'Counting DNA Nucleotides';
		this.input = '';
		this.output = '';
		this.inputLabel = 'DNA String';
		this.outputLabel = "Count (A C T G)"
		this.placeholder = 'DNA String';
		this.processButtonText = 'Count';
		this.Id = 'DNA';
		this.invalidInput = false; 
	}

	process () {
		this.output = this.dNANucleotidesCount(this.input);
	}

	dNANucleotidesCount(input) {
		let invalidText = 'Invalid DNA String',
			result = null;

		super.clearError();

		if (input.length === 0 || input.length > 1000){
			super.error();
		 	return Invalid;
		}

		result = this.dNANucleotides.getCount(input);

		if (_.isEmpty(result)) {
			super.error();
			return invalidText;	
		} else {
			return _.values(result).join(' ');
		}
	}
}