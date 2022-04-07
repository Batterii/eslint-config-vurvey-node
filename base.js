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
		"import/extensions": ["error", "never"],
		"no-process-env": "error",
		"no-process-exit": "error",
		"no-sync": "warn",
		"sort-imports-es6-autofix/sort-imports-es6": ["error", {
			ignoreCase: true,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
		}],
	},
};
