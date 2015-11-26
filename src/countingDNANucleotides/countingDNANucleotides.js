// view model
import {inject} from 'aurelia-framework';
import {DNANucleotides} from './../core/DNANucleotides';
import _ from './../../jspm_packages/npm/underscore@1.8.3/underscore-min'

@inject(DNANucleotides)
export class CountingDNANucleotides {

	constructor(dNANucleotides) {	
		this.dNANucleotides = dNANucleotides;

		// view model's version of model	
		this.dnaNucleotidesCountInput = '';
		this.dnaNucleotidesCountOutput = '';
	}

	dNANucleotidesCount() {
		let invalidTex = 'Invalid DNA String',
			result = null;

		if (this.dnaNucleotidesCountInput.length === 0 || this.dnaNucleotidesCountInput.length > 1000){
			this.dnaNucleotidesCountOutput = Invalid;
			return;
		}

		result = this.dNANucleotides.getCount(this.dnaNucleotidesCountInput);

		this.dnaNucleotidesCountOutput = (_.isEmpty(result)) 
			? invalidTex : 
			_.values(result).join(' ');
	}
}