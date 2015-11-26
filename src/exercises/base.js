/// base call with functionality needed to support inputOutput.html file

export class Base {
	constructor () {
		this.title = '';
		this.input = 'input';
		this.output = '';
		this.inputLabel = ''; 
		this.outputLabel = '';
		this.placeholder = '';
		this.processButtonText = 'Process';
		this.Id = '';
		this.invalidInputStyle = ''; 
	}

	error() {
		this.invalidInputStyle = 'error';
	}

	clearError() {
		this.invalidInputStyle = '';
	}

	process () {
		return '';
	}
}