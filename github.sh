git add .
read -p "Commit description: " desc
git commit -m "$desc"
git remote add origin git@github.com:ae9803/My-Final-Project.git
git push -u origin master