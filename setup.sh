if [ "$TRAVIS_BRANCH" == "master" ] || [ "$TRAVIS_BRANCH" == "develop" ]; then
    echo "setup $TRAVIS_BRANCH"
    npm install -g firebase-tools
fi