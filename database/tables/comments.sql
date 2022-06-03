CREATE TABLE blog.BlogComments (
	commentid bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
	url varchar NOT NULL,
	username varchar NOT NULL,
	email varchar NULL,
	blogcomment text NULL
);
CREATE INDEX comments_urlusername_idx ON blog.BlogComments (url,username);
CREATE INDEX comments_url_idx ON blog.BlogComments (url);
CREATE INDEX comments_urlusernameemail_idx ON blog.BlogComments (url,username,email);
CREATE INDEX comments_usernameemail_idx ON blog.BlogComments (username,email);
CREATE INDEX comments_username_idx ON blog.BlogComments (username);
CREATE INDEX comments_email_idx ON blog.BlogComments (email);
