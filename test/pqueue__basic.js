// --------------------------------------------------------------------------------------------------------------------
// Description		: Add general tests here that don't belong in any other category
// Author 			: H.W.Risser
// Date Created 	: 2013-04-25
// Date Modified	: 2013-04-25
// --------------------------------------------------------------------------------------------------------------------

var should = require("should");
var pqueue = require('../');


// --------------------------------------------------------------------------------------------------------------------
describe('pqueue -- basic', function(){

	before(function() {
		should.exist(pqueue);

		// pqueue = new PQueue();
		// should.exist(pqueue);
		
		(typeof pqueue.run).should.equal('function');
	});

	// ----------------------------------------------------------------------------------------------------------------
	it('should run', function(){
		var result = pqueue.run();
		result.should.equal('queue started');
		// result.should.be.ok;
	});

	// ----------------------------------------------------------------------------------------------------------------
	it('should allow for xyz', function(){
		// ...
	});

	// ----------------------------------------------------------------------------------------------------------------
	it('should fail when xyz', function(){
		// ...
	});

});

