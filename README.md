# Replace Pre-renewal Form

Pre-renewal form for the Replace/Reinsurance project.  Just a mock-up with some dummy data at this stage.


##Runtime Dependencies
* react (main JavaScript library)
* bootstrap (UI framework)
* react-bootstrap (allows easy addtion of Bootstrap elements as React components)
* jquery
* griddle-react (for table display)
* underscore (peer dependency for griddle-react)

##Development Dependencies
* Babel (ES6 transpiler, also has built-in React JSX transpilation)
* Webpack (module loader)
	** Webpack-dev-server (local development server, allows React hotloading)
	** react-hot-loader (see more info below)
* Gulp (general build system, e.g. copying assets around).
	** Gulp-inject to inject refs into 



##Build Instructions
1. git clone ssh://git@devci-adstash.corp.aal.au:7999/trans/prerenewal-form.git
1. cd prenewal-form
1. npm install


####To run dev version with webpack-dev-server:###
1. npm run start
1. Open http://localhost:8080/src/index.html in your browser.

This dev version uses the react-hot-loader.  With react-hot-loader you can make changes to your JavaScript source code, and the system will compile and load those changes to your browser without (drum roll, please...) _without_ the whole page being reloaded!  This means that your page updates without losing its state, so all the variables (apart from the ones you just changed in your code update) stay the same, as does all the hide/show states.  This is some seriously cool stuff!



####To copy build version to dev server (Domino):###
1. npm run toDevServer
1. Open http://intranet.dev.corp.aal.au/mike/replace/table-test/index.html in a browser

NB: this actually does a copy of a the ./build folder to the domino server, which I have mapped as a local drive on my workstation.  The path is m:/html/mike/replace/table-test.  It also cleans out the target folder, m:/html/mike/replace/table-test, first, so use this with caution.

