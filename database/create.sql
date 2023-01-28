CREATE TABLE "user" (
    user_id SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
	"surname" VARCHAR(50) NOT NULL,
    avatar TEXT,
    username VARCHAR(50) UNIQUE NOT NULL,
	"role" VARCHAR(10) CHECK ("role" IN ('admin', 'user'))
);


CREATE TABLE post (
    post_id SERIAL PRIMARY KEY,
    image TEXT,
    "message" VARCHAR(500) NOT NULL,
    user_id INT NOT NULL,
    create_at TIMESTAMP NOT NULL DEFAULT now(),
	"location" varchar(20) NOT NULL,
    status VARCHAR(10) CHECK (status IN ('drafted', 'deleted', 'published')),
    CONSTRAINT "fk_POST_USER" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON
    DELETE
        NO ACTION ON
    UPDATE
        NO ACTION
);


CREATE TABLE "like"(
	user_id INT NOT NULL,
	post_id INT NOT NULL,
	create_at TIMESTAMP NOT NULL DEFAULT now(),
	PRIMARY KEY (user_id, post_id)
);