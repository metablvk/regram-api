CREATE TABLE Post ( 
  id SERIAL UNIQUE, 
  title TEXT NOT NULL, 
  description TEXT NOT NULL, 
  img TEXT NOT NULL, 
  uid TEXT NOT NULL
);

INSERT INTO Post (title, description, img, uid) VALUES (
  'I''m a title',
  'I''m a description',
  'I''m a image',
  'I''m a uid'
);