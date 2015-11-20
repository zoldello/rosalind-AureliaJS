/// nucleotides count
import {inject} from "aurelia-framework";
import _ from './../../jspm_packages/npm/underscore@1.8.3/underscore-min'
import * as underscoreString from './../../jspm_packages/npm/underscore.string@3.2.2/dist/underscore.string.min'


export class DNANucleotides {
	constructor() {
		_.string = !!_.string ? _.string : underscoreString; 
		var i = 0;
	}

	get Id() {
		return 'DNA'
	}

	getCount(DNAString) {
		return 5;
	}
}
