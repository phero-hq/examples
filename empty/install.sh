SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)
cd $SCRIPT_DIR

(cd ../../phero && ./node_modules/.bin/lerna bootstrap)

npm uninstall -g phero && npm install -g ../../phero/packages/cli
