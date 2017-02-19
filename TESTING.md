##Testing Solutions

In a general sense, the goal it to make it easy to create, and run unit tests for each solution (not in a mandatory draconian way) easy so that all of us can get used to creating solutions that are easy to test, and sure that we are on the right track.

Good unit tests make getting started with a difficult problem easy, because the first few tests are the simplest inputs we can imagine, and are often trivial to handle. Then, as we get more momentum the tests let us know when our change effected a easier case.

###Javascript

One of the most familiar languages around, and a very well documented testable language. This repo lets you run javascript tests through the npm test command.

To get up and running, make sure you have node installed [download](https://nodejs.org/en/download/). Then run `npm install` from the top of this repo. This will download all the dependencies to run the javascript test. If you are interested in the set up of this, see [jasmine](https://jasmine.github.io/) and [karma](https://karma-runner.github.io/1.0/index.html).

A simple add function test would look like this:

	describe('ABC_calculator.add', function () {
		it('should return correct sum', function () {
			expect(ABC_calculator.add(1,1)).toEqual(2);
		});
	});

You'll probably notice this syntax is very similar to Rspec.

IMPORTANT NOTE: In order to not mess with anyone elses solution, the add function is namespaced to an object with your initials plus the challenge name.
