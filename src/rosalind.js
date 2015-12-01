// view model

// the view needs $ and twitter bootstrap via the view model, do not delete them in this file
import $ from './../jspm_packages/github/twbs/bootstrap@3.3.6/js/bootstrap.min.js'
import * as twbs from './../jspm_packages/github/components/jquery@2.1.4/jquery.js' 

export class App {
	constructor() {
		this.problems = [ // order matters
			{ 'viewModel': 'countingDNANucleotides', 'title': 'Counting DNA Nucleotides' }, 
			{ 'viewModel': 'transcribedDNAToRNA', 'title': 'Transcribe DNA To RNA' },
			{ 'viewModel': 'complementingDNAStrand', 'title': 'Complementing a Strand of DNA' },
			{ 'viewModel': 'fibonacci', 'title': 'Rabbits and Recurrence Relations' }

		];
	}

	changeView(selectedIndex = this.select.options.selectedIndex) {  // this.selected is set on view
		let viewModel = this.problems[selectedIndex].viewModel;
		
		this.composeElementViewModel.viewModel = `./exercises/${viewModel}`; //this.composeElementViewModel is from the view via ref
	}
}