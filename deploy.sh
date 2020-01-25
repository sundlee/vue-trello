#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy vue-trello'

git push -f https://github.com/sundlee/vue-trello.git master:gh-pages

cd -