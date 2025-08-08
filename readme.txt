1. npm init //install package for nodejs handler 
2. npm i express //install express of latest version
     or
    npm install express
3. npm i express@4.13.2 //it also install express with specified version
    or
   npm install express@4.13.2

4. node --version //to check the version of nodejs
5. npm -version  ////to check the version of npm

6. npm install nodemon //help to do not restsrt the server if anychanges are made in code 





# Steps to push your project whole folder in github.
step-1: Create repository.

step-2: In your terminal or command prompt, go to your project directory then, 
        run command : git init

step-3: Add GitHub Remote Repository
        Copy the remote URL from GitHub (e.g., https://github.com/username/project_name.git), and 
        run command : git remote add origin https://github.com/username/project_name.git

step-4: Make sure your project has a .gitignore file, if not, create one and add this:
        /vendor
        /node_modules
        .env
        .DS_Store
        /public/storage
        /storage/*.key
        .idea

step-5: Commit and Push Your Code by command:
        git add .
        git commit -m "Initial commit of Laravel project"
        git branch -M main
        git push -u origin main

# Once you’ve made changes to any file in your project and want to update them on GitHub, just follow these simple steps:

step-1: To stage all modified files, run command : git add .
        OR
        To stage just the file marked M, run command : it add file_Path

step-2:  Commit the Change 
        run command : git commit -m "your message "

step-3:  Push to GitHub
        run command : git push origin main

# Bonus Tip:
To check the meaning of Git status codes: 
        run command : git status