module.exports = {
	"parser": "@typescript-eslint/parser",
	"plugins": ["@typescript-eslint"],
	"rules": {
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-misused-new": "error",
		// TODO: enable pending certain bugfixes
		// https://github.com/typescript-eslint/typescript-eslint/issues/1067
		//"@typescript-eslint/no-unnecessary-condition": "error",
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		// TODO: enable pending certain bugfixes
		// https://github.com/typescript-eslint/typescript-eslint/issues/1061
		// https://github.com/typescript-eslint/typescript-eslint/issues/1066
		//"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unused-vars": "error",
		"no-unused-vars": "off",
		"@typescript-eslint/restrict-plus-operands": "error",
	},
};
