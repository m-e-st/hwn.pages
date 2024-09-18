#!/bin/sh
npm run build
php -S localhost:8081 -t ./public/

