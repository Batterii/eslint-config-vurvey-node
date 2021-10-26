# @batterii/eslint-config-vurvey-node
Contains [ESLint][eslint] configurations for Vurvey Node.js projects. These configurations
[extend][eslint-ext] base configurations located in [eslint-config-vurvey][eslint-config-vurvey].


## Modules
This package contains two modules, described below. For simplicity and for ESLint support, they are
written as CommonJS modules in plain JavaScript.

### index.js
This module contains the base config for Node.js, which extends the base config from
[eslint-config-vurvey][eslint-config-vurvey]. With this package installed, this base config can be
referenced within a child configuration like so:

```yaml
extends: "@batterii/eslint-config-vurvey-node"
```

### test.js
This module contains changes which should be applied to the base config for linting automated test
files written in [Mocha][mocha], using [Chai][chai] for assertions and [Sinon][sinon] for test
doubles. It extends the `test` config from [eslint-config-vurvey][eslint-config-vurvey].

This `test` config mostly relaxes rules from the base config instead of adding more restrictions.
This is because such test code has a different purpose than production-ready code, so we need not be
as strict with it.

With this package installed, this `test` config can be referenced within a child configuration like
so:

```yaml
extends:
  - "@batterii/eslint-config-vurvey-node"
  - "@batterii/eslint-config-vurvey-node/test"
```

When using the `test` config, both it and the base config should be referenced in this order. This
is because the `test` config does not actually extend the base config. This approach ensures that
we only have one inheritance path which brings in the base rules.


## Proposing Changes
Linter rules like these are a team effort. All developers subject to these rules should feel free to
propose changes so that we can arrive a set of common rules that work for everyone. To do this,
simply open a pull request and give other affected devs the opportunity to discuss in comments.

For organization and tracking purposes, pull requests to this repo should focus on changing a
small number of rules at a time. This will help keep discussion focused on individual conventions
and concerns.

Note that the rules in this repo only affect our back end Node.js repositories. In order to make
changes to common rules, see [eslint-config-vurvey][eslint-config-vurvey].


## Publishing
`npm version` and `npm publish` can be used to publish this package as normal. These should be run
in the latest `main` branch by someone with write access to the package on NPM. When doing so, a
`prepublishOnly` script will automatically push the verison number commmit and tag to the
GitHub repo.

Note that ESLint configuration changes can have massive effects on other developers and code bases.
When publishing a new version of this package, a [breaking release][semver] should be made if one or
more rules changes has the potential to produce new linter errors (not warnings) which cannot be
auto-fixed by ESLint's `--fix` flag.

Doing this will enable developers of affected repositories to upgrade to the breaking version and
address the new errors when they are able.


## Peer Dependencies
ESLint's developer guide for [shareable configs][eslint-share] recommends that such configs
declare the ESLint version they need-- as well as versions for any plugins-- as
[peer dependencies][peer-deps] rather than as direct dependencies. This expresses compatibility
limitations while still ultimately leaving control over ESLint and its plugins to the repositories
where ESlint will actually be run.

For more information about this approach, see [this Node.js blog post][peer-deps-blog] on the
subject.


[chai]: https://www.chaijs.com/
[eslint]: https://eslint.org/
[eslint-config-vurvey]: https://github.com/Batterii/eslint-config-vurvey
[eslint-ext]: https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files
[eslint-share]: https://eslint.org/docs/developer-guide/shareable-configs
[mocha]: https://mochajs.org/
[peer-dependencies]: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#peerdependencies
[peer-deps-blog]: https://nodejs.org/en/blog/npm/peer-dependencies/
[semver]: https://semver.org/
[sinon]: https://sinonjs.org/
