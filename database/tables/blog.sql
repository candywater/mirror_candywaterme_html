CREATE TABLE blog.blog (
	blogid integer NOT NULL GENERATED ALWAYS AS IDENTITY,
	blogtitle varchar NULL,
	docurl varchar NOT NULL,
	blogurl varchar NOT NULL,
	category varchar NULL,
	createdate date NULL,
	modifydate date NULL,
	summary varchar NULL,
	tags varchar NULL,
	"comment" varchar NULL
);
CREATE INDEX blog_docurl_idx ON blog.blog (docurl);
CREATE INDEX blog_blogtitle_idx ON blog.blog (blogtitle);
CREATE INDEX blog_summary_idx ON blog.blog (summary);
CREATE INDEX blog_createdate_idx ON blog.blog (createdate);
CREATE INDEX blog_modifydate_idx ON blog.blog (modifydate);
