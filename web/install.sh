(cd ../../samen && ./node_modules/.bin/lerna bootstrap)

npm uninstall -g samen && npm install -g ../../samen/packages/cli

# (cd ./client && npm uninstall @samen/core && npm install ../../../samen/packages/core)
(cd ./client && npm uninstall @samen/client && npm install ../../../samen/packages/client)

# (cd ./server && npm uninstall @samen/core && npm install ../../../samen/packages/core)
(cd ./server && npm uninstall @samen/server && npm install ../../../samen/packages/server)
