SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)
cd $SCRIPT_DIR

(cd ../../samen && ./node_modules/.bin/lerna bootstrap)

npm uninstall -g samen && npm install -g ../../samen/packages/cli

(cd ./client && npm uninstall @samen/client && npm install ../../../samen/packages/client)
(cd ./server && npm uninstall @samen/server && npm install ../../../samen/packages/server)