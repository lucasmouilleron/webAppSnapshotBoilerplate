webAppSnapshotBoilerplate
=========================

Features
--------
- Snapshot generation for angular app with phantomJS
- Detect Google requests (with htaccess and escape_fragment) and servers the html snasphot instead of the web app
- Auto generation on Google request if snapshot does not exist
- Sample angular web app

Install
-------
- Apache + PHP 5
- Install NodeJS : http://nodejs.org/download
- `cd server && npm install`
- `cd server && vi config.json` : 
    - `envPath` : paste the result of `echo $PATH`
    - `baseURL` : the base URL of the app
- `cd webApp && npm install && grunt build`
- `cd webApp && vi .htaccess` : edit the `RewriteBase`

Tests
-----
- Manually generate snaphots : 
    - `make-snapshot http://localhost.com/webAppSnapshotBoilerplate/webApp/#!/reddits`
    - `make-snapshot http://localhost.com/webAppSnapshotBoilerplate/webApp/#!/github/lucasmouilleron`
- Get snapshot, like Google would do it :
    - http://localhost.com/webAppSnapshotBoilerplate/webApp/?_escaped_fragment_=/reddits
    - http://localhost.com/webAppSnapshotBoilerplate/webApp/?_escaped_fragment_=/github/lucasmouilleron

Todos
=====
- Scaffhold for background snapshot generation
- Remove php dependencie
- Alert in server/phantomjs-runner.js
- Alert in server/snapshots/index.php