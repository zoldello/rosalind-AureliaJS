// view model
import $ from './../jspm_packages/github/twbs/bootstrap@3.3.5/js/bootstrap.min.js'
import * as twbs from './../jspm_packages/github/components/jquery@2.1.4/jquery.js' 

export class App {
	constructor() {
		this.problems = [ // order matters
			{ 'viewModel': 'countingDNANucleotidesViewModel' }, 
			{ 'viewModel': 'transcribedDNAToRNAViewModel'}
		];
	}
}

