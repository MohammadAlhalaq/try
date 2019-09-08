BEGIN;

DROP TABLE IF EXISTS users,posts,category,comments CASCADE;

CREATE TABLE users (
  userid SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE,
  email VARCHAR UNIQUE,
  password VARCHAR,
  gender varchar,
  type VARCHAR,
  birthday VARCHAR
);

CREATE TABLE category(
  categoryid SERIAL PRIMARY KEY,
  title VARCHAR UNIQUE
);

CREATE TABLE posts (
  postid SERIAL PRIMARY KEY,
  title VARCHAR,
  content VARCHAR,
  image text,
  price INT,
  user_id int  REFERENCES users(userid),
  category VARCHAR REFERENCES category(title)
);

CREATE TABLE comments(
  commentid SERIAL PRIMARY KEY,
  content VARCHAR,
  parent_post int REFERENCES posts(postid),
  parent_comment int REFERENCES comments(commentid)
);

COMMIT;