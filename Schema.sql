-- CREATE DATABASE Q_and_A;

-- SELECT 'CREATE DATABASE q_and_a'
-- WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'q_and_a');

-- \gexec;

\c q_and_a;

-- DROP TABLE questions;

-- CREATE TABLE IF NOT EXISTS questions (
--   id SERIAL PRIMARY KEY,
--   product_id INT,
--   body text,
--   date_written BIGINT,
--   asker_name text,
--   asker_email text,
--   reported INT,
--   helpful int
-- );

-- COPY questions FROM '/Users/santiagoveranicola/hackreactor/SDC/Questions-and-Answers/CSV/questions.csv' CSV HEADER;

-- DROP TABLE answers;

-- CREATE TABLE IF NOT EXISTS answers (
--   id SERIAL PRIMARY KEY,
--   question_id INT,
--   body text,
--   date_written BIGINT,
--   answerer_name text,
--   answerer_email text,
--   reported INT,
--   helpful int
-- );

-- COPY answers FROM '/Users/santiagoveranicola/hackreactor/SDC/Questions-and-Answers/CSV/answers.csv' CSV HEADER;

-- DROP TABLE photos;

-- CREATE TABLE IF NOT EXISTS photos (
--   id SERIAL PRIMARY KEY,
--   answer_id INT,
--   "url" text
-- );

-- COPY photos FROM '/Users/santiagoveranicola/hackreactor/SDC/Questions-and-Answers/CSV/answers_photos.csv' CSV HEADER;


-- ALTER TABLE questions
-- ALTER COLUMN date_written SET DATA TYPE timestamp without time zone
-- USING to_timestamp(date_written/1000),
-- ALTER COLUMN date_written
-- SET DEFAULT current_timestamp;


-- ALTER TABLE answers
-- ALTER COLUMN date_written SET DATA TYPE timestamp without time zone
-- USING to_timestamp(date_written/1000),
-- ALTER COLUMN date_written
-- SET DEFAULT current_timestamp;


-- INSERT INTO answers ("question_id", "body", "answerer_name", "answerer_email" ) VALUES (1, '‘asd’', 'anoasnfnws', 'abc');


CREATE INDEX index_questions On questions(id);
CREATE INDEX index_questions_product_id On questions(product_id);
CREATE INDEX index_answers_id On answers(id);
CREATE INDEX index_answers_questions_id On answers(question_id);
CREATE INDEX index_answers_date_written On answers(date_written);
