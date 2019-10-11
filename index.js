module.exports = {
	"parser": "@typescript-eslint/parser",
	"plugins": ["@typescript-eslint"],
	"rules": {
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-unnecessary-condition": "error",
		"@typescript-eslint/restrict-plus-operands": "error",
	},
	"overrides": [
		{
			"files": ["*.ts", "*.tsx"],
			"rules": {
				"@typescript-eslint/adjacent-overload-signatures": "error",
				"@typescript-eslint/no-misused-new": "error",
				"@typescript-eslint/no-unnecessary-qualifier": "error",
				"@typescript-eslint/no-unnecessary-type-assertion": "error",
				"@typescript-eslint/no-unused-vars": "error",
				"no-unused-vars": "off",
			},
		},
	],
};
