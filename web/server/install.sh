npm rm @samen/samen
rm ./node_modules/.bin/samen-samen
(cd ../../../samen && lerna bootstrap)
npm i ../../../samen/packages/samen
