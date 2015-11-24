/// Bioinfromatics library
///TODO: If this becomes larges, refactor into an extension to _.string
	let DNA = {};

 	DNA.isValid = function(dnaString, ignoreCase = false) {
 		if (!dnaString || typeof dnaString !== 'string') {
 			return false;
 		}

 		let dnaStringToUse = ignoreCase ? dnaString.toUpperCase().trim() : dnaString.trim(),
 			isDNAValid = true; // return value if DNA is not proven invalid

 		for (let n of dnaStringToUse) {
 			if (n === 'A' || n === 'C' || n === 'G' || n === 'T') {
 				continue;
 			}

 			isDNAValid = false; 
 			break;
 		}

 		return isDNAValid
 	}
 
export default DNA
