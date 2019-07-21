#!/bin/bash

ng build
cd ../
rm *.js
rm *.html
rm *.png
rm *.ico

echo "cleaned up root folder, copying dist"
cp personal-website/dist/personal-website/* .
echo "ready to push to github pages"
