FILE="dist/lambda-bundle.zip"

[ -f node_modules ] && rm -r node_modules

npm install --only=prod

[ -f "$FILE" ] && rm "$FILE"

zip "$FILE" -r *.js *.json .env node_modules/ includes/ mock/
