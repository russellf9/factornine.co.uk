## Factornine Website Yeoman Application

The site is adapted from the standard Yeoman web app.

See:    [Web app generator](https://github.com/yeoman/generator-webapp)

And: [Improving Your Development Workflow with Yeoman](http://blog.teamtreehouse.com/improving-development-workflow-yeoman)

### Requirements
   # If we have the following: > Error: Cannot find module 'load-grunt-tasks'
   
   $ npm update
   
   
### Build
    # Run the default Grunt task
	$ grunt

	# To run the `test` server and set up watches
	$ grunt serve
	
### Git
    Using bitbucket to host the site.
    #
    $ git remote add origin git@bitbucket.org:rwenban/factornine.co.uk.git
    $ git push -u origin --all # pushes up the repo and its refs for the first time
    $ git push -u origin --tags # pushes up any tags

    # To push to master
    $ git push origin master

### Location
    # In terminal locate the `app`
    $ cd /Users/russellwenban/localhosts/www.factornine.co.uk/website


### Rebuild

Simply run the default task:

```
grunt
```

This will build the app. When any changes have been made or run:

```
grunt build
```

The grunt task is a bit slow to do everything.

Will build to the _dist_ directory.


```
grunt serve
```

This will run the local server `http://localhost:9000`

### Upload

I'm currently using Filezilla, and the site is hosted by [Media Marmot Ltd](http://cp.factornine.co.uk).

1. Unlock the site
2. Open Filezilla
3. In Filezilla - Open local site `/Users/russellwenban/localhosts/www.factornine.co.uk/website/dist/`
3. In Filezilla - Check connect to `factornine.co.uk`
4. and open `/public_html`
5. Upload all files from the local dist folder


## Gulp

I intend to swap to using Gulp for the build tasks and if possible the deployment.