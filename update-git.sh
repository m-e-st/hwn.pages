#!/bin/sh
npm run build
echo -n "hwn.de" >CNAME
git add .
git commit -m "update: $@"
git push origin main
npm version patch -m "update: $@"
