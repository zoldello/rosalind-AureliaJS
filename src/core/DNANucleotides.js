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
		nucleotidesListCount = [];

		// ensure input is valid
		if (!dnaString || !_.isString(dnaString)) {
			return [];
		}

		if (!_.string.bioinformatics.DNA.isValidDNA(dnaString, true)) {
			return [];
		}

		// initialize return array
		for (let i = 0; i < 4; i++) {
			nucleotidesListCount[i] = 0;
		}

		// make input upper case, fault tolerance for the use of lower case
		dnaStringToUpper = dnaString.toUpperCase();

		// main part of method- cout nucleotides
		_.string.chars(dnaStringToUpper).forEach(n => {
			switch(n) {
				case 'A':
					nucleotidesListCount[0] = nucleotidesListCount[0] + 1;
					break;
				case 'C':
					nucleotidesListCount[1] = nucleotidesListCount[1] + 1;
					break;
				case 'G':
					nucleotidesListCount[2] = nucleotidesListCount[2] + 1;
					break;
				case 'T':
					nucleotidesListCount[3] = nucleotidesListCount[3] + 1;
					break;
			}
		});

		return nucleotidesListCount;
	}
}
