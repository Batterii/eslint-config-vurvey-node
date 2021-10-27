module.exports = {
	env: {
		node: true,
	},
	extends: "@batterii/eslint-config-vurvey/base",
	plugins: [
		"import",
		"sort-imports-es6-autofix",
	],
	rules: {
		"import/extensions": ["error", "always", {ignorePackages: true}],
		"no-restricted-syntax": ["error", {
			message: "Don't declare enums",
			selector: "TSEnumDeclaration",
		}],
		"sort-imports": "off",
		"sort-imports-es6-autofix/sort-imports-es6": ["error", {
			ignoreCase: true,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
		}],
	},
};
