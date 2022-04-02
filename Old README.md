# Svelte Template
This is a template for new Svelte apps set up the way I like it. This includes:
- TypeScript Support
- SCSS Support
- Dependancies more up to date than the official svelte template
- My preferred License
- Directory Structure
- Publish to GitHub pages workflow
- A welcome page with a checklist of all the things to do to convert the template to a new application

## Installation
Assuming you already have Node.js and NPM installed you can get started by running the following command in your terminal:
```bash
npx degit mikhad/svelte-template
```
or
```bash
npx degit mikhad/svelte-template folder_to_put_it_in
```
Once downloaded run `npm i` to install the dependancies.

Finally run `npm run dev` to start the development server on localhost:8080. You can access it on your network from another device at https://<your ip address>:8080
## Deploying to GitHub Pages
There is a ready to go workflow that compiles the code and puts the result on a new branch called pages. If you want to host your site on GitHub pages you need to:
- Go to your repository's settings and select pages on the left.
- Under the Source drop down select the pages branch.
- Click Save.

After a minute or two your site will be live on github pages.