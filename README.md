# Welcome to TypeScript with React and Redux Class

## Class Information Page

[https://www.t4d.io/wintellect-typescript-with-react-and-redux-04272020](https://www.t4d.io/wintellect-typescript-with-react-and-redux-04272020)

## Other Links

The instructor will distribute additional private links during class for downloading courseware, registering for class completion badges, and downloading recordings...

All code in this repository is distbuted under the [MIT license](license.txt).

## How to Use the Instructor's Version

The following instructions will help students pull down the instructor's version to resume class where the instructor is.

1. Clone this repository to a new folder. Do not attempt to copy these files over your version or another version which you have cloned. Replace `FOLDER_NAME` with the name of a new folder which will be created when the content is cloned.

```
git clone https://github.com/t4d-classes/react-redux-typescript_04272020.git FOLDER_NAME
```

2. Change into the folder you cloned into.

```
cd FOLDER_NAME
```

3. Run the following command to install the NPM packages.

```
npm install
```

4. To start the React application, run the following command.

```
npm start
```

5. Open the editor of your choice and edit the files.

## Configuration and Data for the REST API part of the class (Day 3)

Here is the `scripts` configuration which can be copied and pasted for the REST API portion of the class. When asked by the instructor, replace the `scripts` section of the `package.json` file in the `demo-app` project with the `scripts` section below.

```json
"scripts": {
  "start": "run-p web rest",
  "web": "react-scripts start",
  "rest": "json-server --port 3060 ./db.json",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```

Here is the `db.json` JSON which can be copied and pasted for the REST API portion of the class. This content will pasted into a file named `db.json`. The `db.json` file will be placed in the `demo-app` folder, the same folder as the `package.json` file. The `db.json` file should **NOT** be placed in the `src` folder.

```json
{
  "colors": [
    { "id": 1, "name": "red", "hexcode": "#ff0000" },
    { "id": 2, "name": "green", "hexcode": "#00ff00" },
    { "id": 3, "name": "blue", "hexcode": "#0000ff" }
  ],
  "cars": [
    {"id":1,"make":"Ford","model":"Fusion Hybrid","year":2019,"color":"blue","price":45000},
    {"id":2,"make":"Tesla","model":"S","year":2018,"color":"red","price":100000}
  ]
}
```