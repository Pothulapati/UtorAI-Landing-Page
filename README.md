# Introduction
Repository of **Utor AI**'s landing page. You will see that there are two main directories, **'src'** and **'dist'**. 
The **'src'** contains the source code and during development you are recommended to edit only **'src'**. 
The *'gulp: build'* **gulp task** will build and optimize the code in **'src'** making it upload ready.

# Getting Started
1. Edit code in **'src'** directory.
2. Build the code using **gulp**.
3. Check for any errors during the **gulp build**, if any restart from step 1.
4. Push the code.

Note: During development, you can also use the *gulp: default* task to build and create a local server (using **gulp-connect** plugin) which uses **gulp.watch()** to **live reload** the page watching your changes automatically.

# Build
**Gulp.js**, a javascript based asynchronous task runner that is used to automate the build process of the landing page.

1. The **gulp:css** task is used to compile the sass code to css code and minify it.
2. The **gulp:js** task is used to minify the javascript code.
3. The **gulp:img** task is used to compress images of various formats.
4. The **gulp:html** task is used to minify the html.

This build process ensures that the code delivered from the server end is fully optimized.

# Contribute
The code is open to contributions from all **Utor AI team members**.