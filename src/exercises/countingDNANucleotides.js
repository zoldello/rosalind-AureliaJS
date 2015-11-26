// view model
import {inject} from 'aurelia-framework';
import {DNANucleotides} from './../core/DNANucleotides';
import _ from './../../jspm_packages/npm/underscore@1.8.3/underscore-min'
import {BaseViewModel} from './baseViewModel.js'

@inject(DNANucleotides)
export class CountingDNANucleotides extends BaseViewModel {

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
		this.dNANucleotidesCount();
	}

	dNANucleotidesCount() {
		let invalidText = 'Invalid DNA String',
			result = null;

		super.clearError();

		if (this.input.length === 0 || this.input.length > 1000){
			this.output = Invalid;
			super.error();
			return;
		}

		result = this.dNANucleotides.getCount(this.input);

		if (_.isEmpty(result)) {
			this.output = invalidText;
			super.error();
		} else {
			this.output = _.values(result).join(' ');
		}
	}
}