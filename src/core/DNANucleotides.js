/// nucleotides count
import {inject} from 'aurelia-framework';
import _ from './../../jspm_packages/npm/underscore@1.8.3/underscore-min'
import underscoreString from './../../jspm_packages/npm/underscore.string@3.2.2/dist/underscore.string.min'
import DNA from './../util/dNA'

export class DNANucleotides {
	constructor() {
		_.string = !!_.string ? _.string : underscoreString;

		_.string.bioinformatics = {}
		_.string.bioinformatics.DNA = DNA;
	}

	get Id() {
		return 'DNA'
	}

	getCount(dnaString) {
		let dnaStringToUpper,
		nucleotides = {
			'A': 0, 
			'C': 0,
			'T': 0, 
			'G': 0
		};

		// ensure input is valid
		if (!dnaString || !_.isString(dnaString)) {
			return {};
		}

		if (!_.string.bioinformatics.DNA.isValids(dnaString, true)) {
			return {};
		}

		// make input upper case, fault tolerance for the use of lower case
		dnaStringToUpper = dnaString.toUpperCase();

		// main part of method- count nucleotides
		_.string.chars(dnaStringToUpper).forEach(n => {
			nucleotides[n] = nucleotides[n] + 1;
		});

		return nucleotides;
	}
}
