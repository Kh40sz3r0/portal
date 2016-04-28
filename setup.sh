#!/bin/bash

echo "setup $TRAVIS_BRANCH"
if [ "$TRAVIS_BRANCH" == "master" ] || [ "$TRAVIS_BRANCH" == "develop" ]; then
    npm install -g firebase-tools
fi