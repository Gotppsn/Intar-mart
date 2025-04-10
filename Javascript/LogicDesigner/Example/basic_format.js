function run(input) {

	Debug.console(input.param1, input.param2);

	return {
		message: 'hello world.' + input.param1 + '/' + input.param2
	};
}