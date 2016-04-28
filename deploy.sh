echo "Deploying to $TRAVIS_BRANCH"
if [ "$TRAVIS_BRANCH" == "master" ]; then
    firebase deploy --token "$FIREBASE_TOKEN_PROD"
elif [ "$TRAVIS_BRANCH" == "develop" ]; then
    firebase deploy --token "$FIREBASE_TOKEN_DEVELOP"
fi
