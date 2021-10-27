module.exports = {
	extends: "./base.js",
	overrides: [{
		extends: "./test.js",
		files: ["*.spec.ts", "*.test.ts"],
	}],
};
