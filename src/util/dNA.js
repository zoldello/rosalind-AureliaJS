/// bioinformatics library
/// influenced by: http://underscorejs.org/docs/underscore.html
///TODO: If this becomes larges, refactor into an extension to _.string
/// DNA-object below does not assume ES2015 or a transpiler is available

(function () {
	var root = this;
	var _ = !_ ? {} : _;

	_.bioinformatics = !_.bioinformatics ? {} : _.bioinformatics;
	_.bioinformatics.DNA = !_.bioinformatics.DNA ? {} : _.bioinformatics.DNA;

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = _.bioinformatics.DNA;
		}
		exports._ = _.bioinformatics.DNA;
	} else {
		root._.bioinformatics.DNA = _.bioinformatics.DNA;
	}

	_.bioinformatics.DNA.VERSION = '0.0.1';



	_.bioinformatics.DNA.isValid = function(dnaString, ignoreCase) {
		var dnaStringToUse,
 			isDNAValid = true, // return value if DNA is not proven invalid
 			n;

 			if (!dnaString || typeof dnaString !== 'string') {
 				return false;
 			}

 			dnaStringToUse = this.toUpperCaseOrNotToUpperCase(dnaString, ignoreCase);

 			for (var i = 0; i < dnaStringToUse.length; i++) {
 				n = dnaStringToUse[i];

 				if (n === 'A' || n === 'C' || n === 'G' || n === 'T') {
 					continue;
 				}

 				isDNAValid = false; 
 				break;

 			}

 			return isDNAValid;
 		};


 		_.bioinformatics.DNA.reverse = function(dnaString, ignoreCase) {
 			var i, 
 			reversed = [], 
 			dnaStringToUse;

 			if (!this.isValid(dnaString, ignoreCase)) {
 				throw 'DNA string is not valid';
 			}

 			dnaStringToUse = this.toUpperCaseOrNotToUpperCase(dnaString, ignoreCase);

 			for (i = dnaStringToUse.length - 1; i > -1 ; i--) {
 				reversed.push(dnaString[i]);
 			}

 			return reversed.join('');
 		};


 		_.bioinformatics.DNA.complement = function(dnaString, ignoreCase) {
 			var i, 
 			complementDNA = [], 
 			dnaStringToUse;

 			if (!this.isValid(dnaString, ignoreCase)) {
 				throw 'DNA string is not valid';
 			}

 			dnaStringToUse = this.toUpperCaseOrNotToUpperCase(dnaString, ignoreCase);

 			for (i = 0; i < dnaStringToUse.length; i++ ) {
 				switch(dnaStringToUse[i]) {
 					case 'A':
 						complementDNA.push('T');
 						break;
 					case 'T':
 						complementDNA.push('A');
 						break;
 					case 'G':
 						complementDNA.push('C'); 
 						break;
 					case 'C':
 						complementDNA.push('G'); 
 						break;
 					default: 	
 						throw 'DNA String given to complement-function is invalid';
 				}
 			}

 			return complementDNA.join('');
 		};



 		_.bioinformatics.DNA.reverseComplement = function(dnaString, ignoreCase) {
 			var reversedDNA = '', 
 			reversedcomplementDNA = '',
 			dnaStringToUse;

 			dnaStringToUse = this.toUpperCaseOrNotToUpperCase(dnaString, ignoreCase);

 			reversedDNA = this.reverse(dnaStringToUse, ignoreCase);
 			reversedcomplementDNA = this.complement(reversedDNA, ignoreCase);

 			return reversedcomplementDNA;
 		};


 		_.bioinformatics.DNA.toUpperCaseOrNotToUpperCase = function(dnaString, ignoreCase) {
 			if (!dnaString) {
 				return '';
 			}

 			return ignoreCase ? dnaString.toUpperCase().trim() : dnaString.trim();
 		};
 	})();