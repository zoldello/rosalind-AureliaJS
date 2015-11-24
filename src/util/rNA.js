/// Bioinformatics Library
///TODO: (1)If this becomes larges, refactor into an extension to _.string
///      (2) This is intended to have no dependencies

let RNA = {};

RNA.transcribe = function(dNAString, ignoreCase = false) {
	if (!dNAString || typeof dNAString !== 'string') {
		return '';
	}

	let dNAStringToUse = ignoreCase ? dNAString.toUpperCase().trim() : dNAString.trim(),
 			isDNAValid = true, // return value if DNA is not proven invalid
 			rNA = [];

 			for (let n of dNAStringToUse) {
 				if (n === 'A' || n === 'C' || n === 'G') {
 					rNA.push(n);
 				} else if (n === 'T') {
 					rNA.push('U')
 				} else {
 					isDNAValid = false; 
 					break;
 				}
 			}

 			if (!isDNAValid) {
 				throw new exception('Invalid DNA String');
 			}

 			return rNA.join('');

 		}

 export default RNA
