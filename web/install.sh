SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)
cd $SCRIPT_DIR

(cd ../../phero && ./node_modules/.bin/lerna bootstrap)

npm uninstall -g phero && npm install -g ../../phero/packages/cli

(cd ./client && npm uninstall @phero/client && npm install ../../../phero/packages/client)
(cd ./server && npm uninstall @phero/server && npm install ../../../phero/packages/server)
