set -e

pnpm run build

cd build

git init

git checkout -b master

git add -A

git commit -m "deploy tertiary"

git push -f git@github.com:catgame345/Project-Technology.git main:gh-pages

cd -