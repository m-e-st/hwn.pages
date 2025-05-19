#!/bin/sh
npm run clean
npm run build
php -S localhost:8081 -t ./docs/

