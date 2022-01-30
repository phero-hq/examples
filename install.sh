(cd ../samen && ./node_modules/.bin/lerna bootstrap)

npm uninstall -g samen && npm install -g ../samen/packages/cli

# (cd ./web/client && npm uninstall @samen/core && npm install ../../samen/packages/core)
(cd ./web/client && npm uninstall @samen/client && npm install ../../../samen/packages/client)

# (cd ./nodejs-client && npm uninstall @samen/core && npm install ../../samen/packages/core)
(cd ./nodejs-client && npm uninstall @samen/client && npm install ../../samen/packages/client)

# (cd ./web/server && npm uninstall @samen/core && npm install ../../samen/packages/core)
(cd ./web/server && npm uninstall @samen/server && npm install ../../../samen/packages/server)
