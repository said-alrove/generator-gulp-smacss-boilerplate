# gulp-smacss-boilerplate
![](https://cdn.swapps.com/uploads/2017/03/starting-with-smacss-1.jpg)

> **Disclaimer:** to understand this boilerplate at all you'll need to have a slight notion about these things:
    
- Git.
- Gulp.js.
- Javascript.
- HTML/CSS/SASS.
- CSS architecture.
- Netlify **(not mandatory)**.

## Guide
> **Note:** It's important to remember to update the submodules used to import vendors when starting using this boilerplate.

* Don't worry about the unnecessary files that are added when updating the vendors such as the `README.md` file of lessier or the directory with the same name that's dedicated to saving the images needed for the `README.md` because this boilerplate already counts with those directories added to the .gitignore file, therefore they won't be reflected when pushing commits to upstream.

* All the empty directories include a .gitkeep file (this is because Git ignores empty folders when pushing to upstream), you have totally freedom to remove it when cloning this repository if you want.

* The project includes a README boilerplate for the final version that will be pushed to the Git repository. This boilerplate includes:

    - A **disclaimer** (this is personal, you can remove it if it's not your case that you're learning Git/Github).
    - A **table of contents** linked to all the headings in the README.
    - A **what I learned** section to include everything you learned while creating that project.
    - A **reports** section to include the results of the reports (as screenshots) of services like [Lighthouse](https://developers.google.com/web/tools/lighthouse) or [GTmetrix](https://gtmetrix.com/).
    - An **Open-graph** section to include the Open-graph cards of both Twitter and Facebook (you can remove it if it's the case that you didn't include the Open-graph tags in you project).

* Both, the public and the src directories will be included when pushing changes to upstream, but the public can be removed if you want just by adding the directory to the .gitignore file.

    > **Disclaimer:** be careful when removing the public directory from upstream, keep in mind that if you're hosting your files in Git itself, then, the optimized version of your project won't be visible for Netlify (or whatever deployment platform you're using) in case you have your site synchronized with the git repository of your project (otherwise you can just drop all the files and everything will be visible), therefore keep an eye on the absolute paths you're using in your files to avoid errors when loading the assets.

## Icons
* Remember to use [Iconifier](https://iconifier.net/) to create all the icon-size versions of an image.

* All the images obtained with Iconifier must be put in the icons directory to work well with the Gulp images tasks.

## Netlify
* There's a basic Netlify config file to help you when deploying the project altogether with Netlify and Github.

    - The base directory is where Netlify will build the site from (if it's necessary). This directory is where's located all the Gulp tasks and package.json files.
    - The commands are basically those needed to build the site as I mentioned before.
    - The publish directory is where Netlify will put everything that was built with the commands mentioned above.

If you don't know anything about what I've mentioned before, I encourage you to leave the file as it's by default, it'll work just perfectly with the current project structure. In case you won't use Netlify to deploy the site you can remove it without problems.

## Gulp tasks
* The plugins used by default are the following:

**HTML tasks**

- [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
- [gulp-cache-bust](https://www.npmjs.com/package/gulp-cache-bust)
- [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)

**Images tasks**

- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- [imagemin-mozjpeg](https://www.npmjs.com/package/imagemin-mozjpeg)
- [imagemin-optipng](https://www.npmjs.com/package/imagemin-optipng)
- [gulp-webp](https://www.npmjs.com/package/gulp-webp)
- [imagemin-webp](https://www.npmjs.com/package/imagemin-webp)
- [gulp-avif](https://www.npmjs.com/package/gulp-avif)
- [imagemin-avif](https://www.npmjs.com/package/imagemin-avif)

**Javascript tasks**

- [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
- [gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [terser](https://www.npmjs.com/package/terser)

**Styles tasks**
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- [sass](https://www.npmjs.com/package/sass)
- [gulp-purgecss](https://www.npmjs.com/package/gulp-purgecss)
- [plumber](https://www.npmjs.com/package/gulp-plumber)
- [gulppostcss](https://www.npmjs.com/package/gulp-postcss)
- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [cssnano](https://www.npmjs.com/package/cssnano)

> **Note:** if you'd like to know more about what each plugin does you can click the links that send you to the npm package and then read the descriptions for more information.

> **Note:** remember that if you'd like to change the folders' names you'll have also to change them in the Gulp tasks paths that could be related to that directory.


* The task located in the scripts.js file have only 1 source, if you'd like to add more files or complete directories... feel free to do it!, just add new strings with the path to the file/directory of your preference (remember to add a comma after each string).

* In the tasks designated to the images optimization, the convertWebp and convertAvif already have the quality option set to 75, if you'd like to change that you can modify the qualityImages variable (the value must be a number between 1 and 100).

    - As an alternative, you can remove the imagesQuality variable and add an independent value to each config object located in the tasks but there's not much sense on don't preserve consistency in images quality.

* > **Important:** [**PurgeCSS**]() is automatically connected with all the HTML files to help you avoid adding styles to elements or classes/ids that don't really exist, therefore if you write styles for an element that it's not included in any of your HTML files, those styles won't be included in the public version once they're processed by Gulp.

    - But, ***what happens when you're trying to inject a class/id from Javascript?*** In those cases you'll need to add those classes manually to an invisible helper element (that's already in the index file to give you a hand), that way PurgeCSS won't exclude the styles from the final result.

    - Due to everything mentioned before, the normalized file isn't totally compiled to the final result at the beginning, but everything should be included once you've finished your project and executed the Gulp tasks one more time.