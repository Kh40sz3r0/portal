if [ "$TRAVIS_BRANCH" == "master" ]; then
    echo "Deploying to prod"
    firebase deploy --token "$FIREBASE_TOKEN_PROD"
elif [ "$TRAVIS_BRANCH" == "develop" ]; then
    echo "Deploying to develop"
    firebase deploy --token "$FIREBASE_TOKEN_DEVELOP"
fi
