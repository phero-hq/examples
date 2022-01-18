npm rm @samen/client
rm ./node_modules/.bin/samen-client
(cd ../../../samen && lerna bootstrap)
npm i ../../../samen/packages/client
