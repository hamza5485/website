export const COMMANDS = {
	single: [
		"help",
		"clear",
		"history",
		"ls"
	],
	mult: [
		"view",
		"explore"
	]
};

export const SECTIONS = [
	"profile",
	"experience",
	"education",
	"skills"
];

export const HELP = `There are four available sections: profile, experience, education, and skills.
These can be viewed using the 'ls' command. For each section, you can use the 'view' command to get an info dump of all
available data in that section for eg 'view profile'.
You can also use the 'explore' command to get a list of functions,
their descriptions, and how to use them for each section for example: 'explore experience'.
You can use the 'history' command to get a list of all commands typed and use the up and down arrow keys to access previously
entered commands. You can also use the 'clear' command to remove all information from the terminal.
In the case of information dump, all responses are JSON encoded.`;

export const ERRORS = {
	commandNotFound: {
		error: true,
		errMsg: `command not found, please use 'help' for more information`
	},
	incomplete: {
		error: true,
		errMsg: `incomplete command, please use 'help' for more information`
	},
	sectionNotFound: {
		error: true,
		errMsg: `section not found, please use 'help' for more information`
	},
	tagNotFound: {
		error: true,
		errMsg: `tag not found, please use 'help' for more information`
	},
	tooManyArgs: {
		error: true,
		errMsg: `too many arguments, please use 'help' for more information`
	},
	functionDoesntExist: {
		error: true,
		errMsg: `function not found, please use 'help' for more information`
	},
	parenthesesAndParamNotSupported: {
		error: true,
		errMsg: `parentheses and params not supported, please use function without '()'`
	},
	noError: {
		error: false,
		errMsg: null
	}
};
