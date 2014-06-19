## CodeGarden app

Hybrid app for Umbraco CodeGarden 2014 conference 

![Alt text](http://www.growcreate.co.uk/media/13617/codegarden.jpg)

See it action at http://codegarden14.projects.growcreate.co.uk/app/demo/index.html

### Installation

1. Make sure Node JS is installed
2. Install Cordova and Ionic
  
  ```
  npm install -g cordova
  npm install -g ionic
  ```

3. Navigate to your folder

  ```
  cd [your folder location]
  ```

4. Install a blank Ionic app

  ```
  ionic start cg14
  ```

6. Add platforms

  ```
  ionic platform add ios
  ionic platform add android
  ```
*Remember you need the relevant SDKs installed for this to work*

5. Replace the contents of the www folder with the contents of the repo

7. Build and run the app

  ```
  ionic build ios
  ionic emulate ios
  
  ionic build android
  ionic emulate android
  ```
