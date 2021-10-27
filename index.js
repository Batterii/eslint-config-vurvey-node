module.exports = {
	extends: "@batterii/eslint-config-vurvey",
	overrides: [{
		extends: "./test.js",
		files: ["*.spec.ts", "*.test.ts"],
	}],
};
