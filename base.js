module.exports = {
	env: {
		node: true,
	},
	extends: [
		"@batterii/eslint-config-vurvey/base",
		"plugin:node/recommended",
	],
	plugins: [
		"import",
		"sort-imports-es6-autofix",
	],
	rules: {
		"import/extensions": ["error", "always", {ignorePackages: true}],
		"no-process-env": "error",
		"no-process-exit": "error",
		"no-restricted-syntax": ["error", {
			message: "Don't declare enums",
			selector: "TSEnumDeclaration",
		}],
		"no-sync": "warn",
		"sort-imports-es6-autofix/sort-imports-es6": ["error", {
			ignoreCase: true,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
		}],
	},
};
