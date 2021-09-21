const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    welcome() {
        this.log('Welcome to the gulp-smacss-boilerplate generator!.')
    }

    writting() {
        this.fs.copy(
            this.templatePath('gulpfile.js'),
            this.destinationPath('gulpfile.js')
        );
        this.fs.copy(
            this.templatePath('public'),
            this.destinationPath('public')
        );
        this.fs.copy(
            this.templatePath('src'),
            this.destinationPath('src')
        );
        this.fs.copy(
            this.templatePath('_gitignore'),
            this.destinationPath('.gitignore')
        );
        this.fs.copy(
            this.templatePath('.gitmodules'),
            this.destinationPath('.gitmodules')
        );
        this.fs.copy(
            this.templatePath('important.md'),
            this.destinationPath('important.md')
        );
        this.fs.copy(
            this.templatePath('netlify.toml'),
            this.destinationPath('netlify.toml')
        );
        this.fs.copy(
            this.templatePath('package-lock.json'),
            this.destinationPath('package-lock.json')
        );
        this.fs.copy(
            this.templatePath('package.json'),
            this.destinationPath('package.json')
        );
        this.fs.copy(
            this.templatePath('README-boilerplate.md'),
            this.destinationPath('README-boilerplate.md')
        );
        this.fs.copy(
            this.templatePath('README.md'),
            this.destinationPath('README.md')
        );
    }

	end() {
		this.log(" ");
		this.log(
			"Finished generating! Before running, make sure you have the Gulp CLI installed globally, and you DON'T have Gulp itself installed globally."
		);
		this.log(" ");
		this.log("If you're not sure how to do this, watch this for more info:");
		this.log("https://www.youtube.com/watch?v=NgaV7503dTk&t=531s&ab_channel=CoderCoder");
		this.log(" ");
		this.log(
			"Once you have the Gulp CLI installed globally, you can run 'gulp' in this project directory to run Gulp!"
		);
		this.log(" ");
	}
}