// view model
import {inject} from 'aurelia-framework';
import {DNANucleotides} from './src/core/DNANucleotides';

@inject(DNANucleotides)
export class App {

	constructor(dNANucleotides) {	
		this.dNANucleotides = dNANucleotides;

		// view model's version of model	
		this.dnaNucleotidesCountInput = '';
		this.dnaNucleotidesCountOutput = '';
	}

	dNANucleotidesCount() {
		let result = this.dNANucleotides.getCount(this.dnaNucleotidesCountInput);

		this.dnaNucleotidesCountOutput = result.length === 0 ? 'Invalid DNA String' : result.join(' ');
	}
}