# Cloudflare worker
Example of a Cloudflare Worker using [Cloudflare's wrangler](https://github.com/cloudflare/wrangler), with examples of deployment using CircleCI, GitHub Actions and Travis CI.

# Requirements
* npm
* [Cloudflare account](https://www.cloudflare.com/)
* [GitHub account](https://www.github.com/), [Travis CI account](https://travis-ci.org/signup) or [CircleCI account](https://circleci.com/docs/2.0/first-steps/)

# Steps
## Install wrangler
`npm i @cloudflare/wrangler -g`

## Generate Cloudflare worker
```bash
wrangler generate cf-worker
cd cf-worker
npm install @cloudflare/wrangler # this will ensure necessary dependencies are installed for CI system
```

A barebone directory structure for a Cloudflare Worker generated from wrangler looks like this:
```
.
├── CODE_OF_CONDUCT.md
├── LICENSE_APACHE
├── LICENSE_MIT
├── README.md
├── index.js
├── package.json
└── wrangler.toml
```

Where:
* `index.js` is the root file for the Cloudflare Worker script
* `package.json` describes the current package and its dependencies
* `wrangler.toml`: contains configurations relative to your Cloudflare account and worker
* `.circleci/`, `.github/` and `.travis.yml` contain the code necessary to deploy the Cloudflare Worker. Only one of them is necessary

You can also add a `.gitignore` file, which will indicate to git which files and folders to not include in its history. You can use the [Node `.gitignore` template available from GitHub](https://github.com/github/gitignore/blob/master/Node.gitignore).

## Configure wrangler
In `wrangler.toml`, you will see `account_id` and `zone_id`. These will be configured in the CI system as environments variables and can be safely removed from `wrangler.toml`.

Set `workers_dev` to `false`.

`name` will be the worker name in your Cloudflare account.

Set `route` to the route that your worker will match on, for example `example.com/cf-worker`.

If you're using an existing Cloudflare worker, make sure the name and route matches.

[A complete example of a `wrangler.toml` file can be found here.](wrangler.toml)

## CircleCI, GitHub Actions or Travis CI
For a complete documentation on each CI system:

* [CircleCI](doc/circleci.md)
* [GitHub Actions](doc/githubactions.md)
* [Travis CI](doc/travisci.md)
