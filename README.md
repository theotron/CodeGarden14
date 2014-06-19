## CodeGarden-app

Hybrid app for Umbraco CodeGarden 2014 conference 

### Installation

1. Make sure Node JS is installed
2. Install Cordova and Ionic
```
npm install -g cordova >
npm install -g ionic >
```
3. Navigate to your folder
```
cd [your folder location]
```
4. Install a blank Ionic app
```
ionic start cg14
```
5. Replace the contents of the www folder with the contents of the repo
6. Add platforms
```
ionic platform add ios
ionic platform add android
```
Remember you need the relevant SDKs installed for this to work

7. Build and run the app
```
ionic build ios
ionic emulate ios

ionic build android
ionic emulate android
```

