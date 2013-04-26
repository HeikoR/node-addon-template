
# Steps to create a new Module

- Create a new module directory `pqueue`.
- Create a `pqueue\src` directory for your source code files.
- Add source files to `pqueue\src`
	- e.g. `pqueue.cpp`

			#include <node.h>
			#include <v8.h>

			using namespace v8;

			Handle<Value> run(const Arguments& args) {
			  HandleScope scope;
			  return scope.Close(String::New("queue started"));
			}

			void init(Handle<Object> exports) {
			  exports->Set(String::NewSymbol("run"),
			      FunctionTemplate::New(run)->GetFunction());
			}

			NODE_MODULE(pqueue, init)

- Try to build (from `pqueue\` root folder of module)
	- Add `binding.gyp` file to `pqueue` folder. 

			{
				"targets": [
					{
						"target_name": "pqueue",
						"sources": [ "src/pqueue.cpp" ]
					}
				]
			}

	- open command shell in root of project/module
	- run `node-gyp configure`
	- run `node-gyp build`
- Create `lib` folder
	- Add `pqueue.js` file.

			var pqueue = require('../build/Release/pqueue');

			module.exports = pqueue;

		- This file will load `pqueue.node`, and export, and if required add other functions, exports, modules etc in future.. 

- Create npm package/module
	- run `npm init` and fill in the prompts
	- (_leave out what you don't know to be filled in later_)

- Quick test
	- run `node` repl

			var q = require('./');
			q.run();

- Add a cup of mocha ...
	- run `npm install mocha --save-dev`
		- this will install `mocha`, and update your `package.json` file to inlude the dependency module
	- run `npm install should --save-dev`
		- this is another helper module that simplifies test cases (allows for syntax like: `myVar.should.equal('somevalue')`)
	- Create `test` folder
		- add test cases, e.g. `pqueue__basic.js` into `test` folder.

				var should = require("should");
				var pqueue = require('../');

				describe('pqueue -- basic', function(){

					before(function() {
						should.exist(pqueue);
						pqueue.run();
					});

					it('should allow for xyz', function(){
						// ...
					});

					it('should fail when xyz', function(){
						// ...
					});
				});
				
	- run `npm test` to run tests.

- Further development changes
	- you can run the following commands from root folder during futher development/changes  
	  (read up more on each of these commands in you don't know how to use them)

			node-gyp build
			node-gyp clean
			node-gyp rebuild

			npm install
			npm test
			npm start
			... 

	- alternatively, once you do `node-gyp build` or `node-gyp rebuild`, you can open the visual studio files and debug, code etc from there ..

# To install

		git clone https://github.com/HeikoR/node-addon-template.git pqueue-min
		cd pqueue-min
		npm install
		npm test
		npm start

Or you can use npm:

		npm install git+https://github.com/HeikoR/node-addon-template.git



