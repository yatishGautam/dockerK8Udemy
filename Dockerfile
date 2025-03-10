FROM node:18
WORKDIR /testapp
COPY git remote add origin git@github.com:yatishGautam/dockerK8Udemy.git
git branch -M main
git push -u origin main