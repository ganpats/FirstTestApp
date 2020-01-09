# FirstTestApp

My first test app in React Native.

## About App

Your app will have 4 screens.

1). Login

2). Select Image

3). View Images

4). Statistics

Navigation flow:
There will be 2 components/stacks inside your root navigation stack.
 1. Login screen 
 2. Drawer navigator (which will have rest of 3 screens). You will navigate within those 3 screens via drawer.

### Screen details :

1). Login :

  Will have username, password, sign-in button. There should be maximum validations on each component.
  Authorization criteria : last three characters of username should match first three characters of password.

2). Select Image :

  A button in center of the screen to let user select an image. User can capture an image from camera and also can select an image 
  from gallery. Image details will be stored in redux store.

3). View Images

  Cards will be rendered (one in a row). Each card will have image and details of image (at least 2 properties).

4). Statistics

  It will have : 
  - Exit from the app button.
  - Label which will display how many times, user has clicked on select image button.