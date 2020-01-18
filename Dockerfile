FROM ruby:2.6.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs mariadb-client
RUN mkdir /back
WORKDIR /back
ADD back/Gemfile /back//Gemfile
ADD back/Gemfile.lock /back/Gemfile.lock
RUN bundle install
ADD back /web
