# Setup
## first setup
### git clone & move files
```
$ git clone git@github.com:ryosk7/rails_on_docker_seed.git
$ mv ./rails_on_docker_seed/* ./
$ mv ./rails_on_docker_seed/.* ./
$ rm -rf rails_on_docker_seed
$ rm -rf .git
$ git init
# If you want to use commit template, you can use this. (This commit template is written in Japanese.)
$ git config --local commit.template ./.commit_template
$ docker-compose build
$ docker-compose run back rails new . -d mysql -T
```
### You should edit database.yml
Like this!
```
- username: root
- password:
- host: localhost
+ username: root
+ password: root
+ host: db
```
### Run Rails server
```
$ docker-compose build
$ docker-compose run back rails db:create
$ docker-compose down
$ docker-compose up -d
$ docker-compose attach rails_server
```