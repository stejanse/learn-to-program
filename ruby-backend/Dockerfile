FROM ruby:2.5

COPY Gemfile Gemfile.lock ./
RUN bundle install
RUN mkdir /src

COPY ./src/main/ruby /src
EXPOSE 4567

CMD ["ruby", "./src/hello.rb"]
