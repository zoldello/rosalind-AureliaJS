/// Bioinformatics Library
///TODO: (1)If this becomes larges, refactor into an extension to _
///      (2) This is intended to have no dependencies

(function () {
	var root = this;
	var _ = !_ ? {} : _;

	_.bioinformatics = !_.bioinformatics ? {} : _.bioinformatics;
	_.bioinformatics.RNA = !_.bioinformatics.RNA ? {} : _.bioinformatics.RNA;

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = _.bioinformatics.RNA;
		}
		exports._ = _.bioinformatics.RNA;
	} else {
		root._.bioinformatics.RNA = _.bioinformatics.DNA;
	}

	_.bioinformatics.RNA.VERSION = '0.0.1';

	_.bioinformatics.RNA.transcribe = function(dNAString, ignoreCase) {
		if (!dNAString || typeof dNAString !== 'string') {
			return '';
		}

		var dNAStringToUse = ignoreCase ? dNAString.toUpperCase().trim() : dNAString.trim(),
 			isDNAValid = true, // return value if DNA is not proven invalid
 			rNA = [], 
 			i, 
 			n;

 			for (i = 0; i < dNAStringToUse.length; i++) {
 				n = dNAStringToUse[i];
 				
 				if (n === 'A' || n === 'C' || n === 'G') {
 					rNA.push(n);
 				} else if (n === 'T') {
 					rNA.push('U');
 				} else {
 					isDNAValid = false; 
 					break;
 				}
 			}

 			if (!isDNAValid) {
 				throw 'Invalid DNA String';
 			}

 			return rNA.join('');
 		};

 		_.bioinformatics.RNA.toUpperCaseOrNotToUpperCase = function(dnaString, ignoreCase) {
 			if (!dnaString) {
 				return '';
 			}

 			return ignoreCase ? dnaString.toUpperCase().trim() : dnaString.trim();
 		};
 	})();