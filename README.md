# @batterii/eslint-config-vurvey-node
Contains [ESLint][eslint] configuration for Vurvey Node.js projects. This configuration
[extends][eslint-ext] base configurations located in [@batterii/eslint-config-vurvey][base].


## Usage
To use this config, first install it and its peer dependencies as dev dependencies. Then, create a
file called `.eslintrc.yaml` at the root of the repository with the following contents:

```yaml
extends: "@batterii/eslint-config-vurvey-node"
```

Finally, create scripts in your `package.json` for running the linter:

```json
{
	"scripts": {
		"lint": "eslint . --ext .ts",
		"lintfix": "eslint . --ext .ts --fix"
	}
}
```

Running these scripts will lint all files in the repo with a `.ts` extension.

If needed on a per-project basis, you can make changes to the configuration within the
`.eslintrc.yaml` file. As a general rule, however, shareable configuration should be preferred to
help ensure code style consistency between different repositories.


## Modules
This package contains three modules, described below. For simplicity and for ESLint support, they are
written as CommonJS modules in plain JavaScript.

### base.js
This module contains the base config for Node.js projects, which extends the base config from
[@batterii/eslint-config-vurvey][base]. Unless modified by a derived config, rules in this config
will be enforced for all `.ts` files in Vurvey Node.js projects.

### test.js
This module contains overrides which are applied to the main config for linting automated test files
with `.test.ts` or `.spec.ts` extensions, mostly relaxing rules from the main config instead of
adding more restrictions. This is because such test code has a different purpose than
production-ready code, so we need not be as strict with it.

This `test` config extends the `test` config from [@batterii/eslint-config-vurvey][base]. It does
*not* extend the main config from this package or the base config from
[@batterii/eslint-config-vurvey][base]. This allows us to apply them as overrides without
duplicating our config inheritance path, which otherwise could cause some annoying or unpredictable
behavior.

### index.js
This module extends `base.js` and adds the overrides from `test.js` for files with the `.test.ts`
and `.spec.ts` extensions. It is the file which is used when referencing
`@batterii/eslint-config-vurvey-node` in our Node.js projects. For organizational purposes, it
should not be changed to contain any rule definitions of its own. It should also not be extended by
other configs.


## Proposing Changes
Linter rules like these are a team effort. All developers subject to these rules should feel free to
propose changes so that we can arrive a set of common rules that work for everyone. To do this,
simply open a pull request and give other affected devs the opportunity to discuss in comments.

For organization and tracking purposes, pull requests to this repo should focus on changing a
small number of rules at a time. This will help keep discussion focused on individual conventions
and concerns.

Note that the rules in this repo only affect our front end React repositories. In order to make
changes to common rules, see [@batterii/eslint-config-vurvey][base].


## Publishing
`npm version` and `npm publish` can be used to publish this package as normal. These should be run
in the latest `main` branch by someone with write access to the package on NPM. When doing so, a
`preversion` script will lint the repo and a `prepublishOnly` script will automatically push the
verison number commmit and tag to the GitHub repo.

Note that ESLint configuration changes can have massive effects on other developers and code bases.
When publishing a new version of this package, a [breaking release][semver] should be made if one or
more rules changes has the potential to produce new linter errors (not warnings) which cannot be
auto-fixed by ESLint's `--fix` flag.

Doing this will enable developers of affected repositories to upgrade to the breaking versions and
address the new errors when they are able.


[base]: https://github.com/Batterii/eslint-config-vurvey
[eslint]: https://eslint.org/
[eslint-ext]: https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files
[eslint-share]: https://eslint.org/docs/developer-guide/shareable-configs
[peer-deps]: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#peerdependencies
[peer-deps-blog]: https://nodejs.org/en/blog/npm/peer-dependencies/
[semver]: https://semver.org/
