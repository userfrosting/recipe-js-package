# Recipe : Adding a 3rd party Javascript package (UserFrosting 5)

[![Version](https://img.shields.io/github/v/release/userfrosting/recipe-js-package?include_prereleases)](https://github.com/userfrosting/recipe-js-package/releases)
![PHP Version](https://img.shields.io/badge/php-%5E8.1-brightgreen)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.md)
[![Build](https://img.shields.io/github/actions/workflow/status/userfrosting/recipe-js-package/Build.yml?branch=5.0&logo=github)](https://github.com/userfrosting/recipe-js-package/actions)
[![Codecov](https://codecov.io/gh/userfrosting/recipe-js-package/branch/5.0/graph/badge.svg)](https://app.codecov.io/gh/userfrosting/recipe-js-package/branch/5.0)
[![StyleCI](https://github.styleci.io/repos/793283029/shield?branch=5.0&style=flat)](https://github.styleci.io/repos/793283029)
[![PHPStan](https://img.shields.io/github/actions/workflow/status/userfrosting/recipe-js-package/PHPStan.yml?branch=5.0&label=PHPStan)](https://github.com/userfrosting/recipe-js-package/actions/workflows/PHPStan.yml)
[![Join the chat](https://img.shields.io/badge/Chat-UserFrosting-brightgreen?logo=Rocket.Chat)](https://chat.userfrosting.com)
[![Donate](https://img.shields.io/badge/Open_Collective-Donate-blue?logo=Open%20Collective)](https://opencollective.com/userfrosting#backer)
[![Donate](https://img.shields.io/badge/Ko--fi-Donate-blue?logo=ko-fi&logoColor=white)](https://ko-fi.com/lcharette)

Example sprinkle for adding a 3rd party Javascript package. [See the learn documentation for more information](http://learn.userfrosting.com/recipes/external-js).
 
# Installation

This sprinkle/example can be installed like any UserFrosting application or skeleton. See the [installation guide](https://learn.userfrosting.com/installation) for the required config and more info on the installation steps.

## Quick start

```bash
git clone https://github.com/userfrosting/recipe-js-package.git
cd recipe-js-package
composer install
php bakery bake
php bakery serve
```

You can now access UserFrosting at : http://localhost:8080

## Docker 

To run inside docker :
```bash
git clone https://github.com/userfrosting/recipe-js-package.git
cd recipe-js-package
docker-compose build --no-cache
docker-compose up -d
docker-compose exec app composer install
docker-compose exec app php bakery bake
```

You can now access UserFrosting at : http://localhost:8080

## Documentation
- [Changelog](CHANGELOG.md)
- [Issues](https://github.com/userfrosting/UserFrosting/issues)
- [License](LICENSE.md)
- [Style Guide](https://github.com/userfrosting/.github/blob/main/.github/STYLE-GUIDE.md)

## Contributing

This project exists thanks to all the people who contribute. If you're interested in contributing to the UserFrosting codebase, please see our [contributing guidelines](https://github.com/userfrosting/.github/blob/main/.github/CONTRIBUTING.md) as well as our [style guidelines](https://github.com/userfrosting/.github/blob/main/.github/STYLE-GUIDE.md).

[![](https://opencollective.com/userfrosting/contributors.svg?width=890&button=true)](https://github.com/userfrosting/sprinkle-core/graphs/contributors)