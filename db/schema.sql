DROP DATABASE IF EXISTS cozy_couch_db;

CREATE DATABASE cozy_couch_db;

USE cozy_couch_db;

CREATE TABLE userMovies(
    id INT(3) NOT NULL AUTO_INCREMENT;
    movie_title VARCHAR(100) NOT NULL;
    movie_genre VARCHAR(50);
    mpaa_rating VARCHAR(5);
    movie_star_rating VARCHAR(5);
    poster_img VARCHAR(255);
    primary_key(id);
);

CREATE TABLE userGames(
    id INT(3) NOT NULL AUTO_INCREMENT;
    game_title VARCHAR(100) NOT NULL;
    game_genre VARCHAR(100);
    game_system VARCHAR(25);
    esrb_rating VARCHAR(5);
    game_star_rating VARCHAR(5);
    box_art VARCHAR(255);
    primary_key(id);
);

CREATE TABLE userBooks(
    id INT(3) NOT NULL AUTO_INCREMENT;
    book_title VARCHAR(100) NOT NULL;
    book_author VARCHAR(50) NOT NULL;
    book_star_rating VARCHAR(5);
    cover_img VARCHAR(255);
    primary_key(id);
);

CREATE TABLE userShows(
    id INT(3) NOT NULL AUTO_INCREMENT;
    show_title VARCHAR(100) NOT NULL;
    tv_genre VARCHAR(100);
    tv_rating VARCHAR(10);
    show_star_rating VARCHAR(5);
    show_img VARCHAR(255);
    primary_key(id);
);

CREATE TABLE globalTop(
    topMovie VARCHAR(100) NOT NULL;
    topGame VARCHAR(100) NOT NULL;
    topBook VARCHAR(100) NOT NULL;
    topShow VARCHAR(100) NOT NULL;
)