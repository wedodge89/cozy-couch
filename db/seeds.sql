USE cozy_couch_db;

INSERT INTO userMovies(movie_title, movie_genre, mpaa_rating, movie_star_rating, poster_img)
VALUES  ("The Prestige", "Thriller/Drama", "PG-13", "*****", "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg"),
        ("Scott Pilgrm vs. The World", "Action/Comedy", "PG-13", "*****", "https://m.media-amazon.com/images/M/MV5BMTkwNTczNTMyOF5BMl5BanBnXkFtZTcwNzUxOTUyMw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"),
        ("Hot Rod", "Comedy", "PG-13", "*****", "https://m.media-amazon.com/images/M/MV5BNjYwNjA3OTY0Nl5BMl5BanBnXkFtZTcwNDMyNDUzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"),
        ("Up", "Animated/Comedy/Adventure", "PG", "****", "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SY1000_CR0,0,664,1000_AL_.jpg"),
        ("Annihilation", "Sci-Fi/Horror", "R", "**", "https://m.media-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SY1000_CR0,0,640,1000_AL_.jpg");

INSERT INTO userGames(game_title, game_genre, game_system, esrb_rating, game_star_rating, box_art)
VALUES  ("Final Fantasy VIII", "RPG", "Nintendo Switch", "T", "*****", "https://ffviiiremastered.square-enix-games.com/share-images/SEA_GuardianS_twitter_share_img_900x471.jpg"),
        ("Detroit: Become Human", "Adventure/Sci-Fi", "PS4" "M", "*****", "https://upload.wikimedia.org/wikipedia/en/e/ee/Detroit_Become_Human.jpg"),
        ("Hollow Knight", "Action Platformer", "Nintendo Switch", "T", "*****", "https://upload.wikimedia.org/wikipedia/en/c/c0/Hollow_Knight_cover.jpg"),
        ("Shovel Knight", "Action Platformer", "Nintendo Switch", "E10+", "****", "https://upload.wikimedia.org/wikipedia/en/c/c8/Shovel_knight_cover.jpg"),
        ("Overcooked 2", "Puzzle/Co-Op", "Nintendo Switch", "E", "***", "https://upload.wikimedia.org/wikipedia/en/0/03/Overcooked_2_cover_art.png");

INSERT INTO userBooks(book_title, book_author, book_star_rating, cover_img)
VALUES  ("It", "Stephen King", "***", "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/It_cover.jpg/220px-It_cover.jpg"),
        ("Lost Causes of Bleak Creek", "Rhett McLaughlin, Link Neal", "****", "https://images-na.ssl-images-amazon.com/images/I/91g2I2ar8xL.jpg"),
        ("Between the World and Me", "Ta-Nehisi Coates", "****", "https://images-na.ssl-images-amazon.com/images/I/91gxrS4ygTL.jpg"),
        ("Inspired", "Rachel Held Evans", "*****", "https://images-na.ssl-images-amazon.com/images/I/71NUCtsO1HL.jpg"),
        ("The Princess Bride", "William Goldman", "****", "https://images-na.ssl-images-amazon.com/images/I/91VVBFr73-L.jpg");

INSERT INTO userShows(show_title, tv_genre, tv_rating, show_star_rating, show_img)
VALUES  ("Scrubs", "Medical/Sitcom", "TV-14", "****", "https://upload.wikimedia.org/wikipedia/en/c/cf/Scrubscard.png"),
        ("Demon Slayer", "Anime/Action", "TV-14", "*****", "https://upload.wikimedia.org/wikipedia/en/7/7e/Kimetsu_no_Yaiba_Blu-ray_Disc_Box_1_art.jpg"),
        ("The Good Place", "Comedy", "TV-14", "*****", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/The_Good_Place_careta.png/1280px-The_Good_Place_careta.png"),
        ("Breaking Bad", "Crime/Drama", "TV-MA", "****", "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png"),
        ("The View", "Talk Show", "TV-PG", "**", "https://upload.wikimedia.org/wikipedia/commons/6/6e/The_View_Logo_%282015%29.png");

INSERT INTO globalTop(topMovie, topGame, topBook, topShow)
VALUES  ("Top Gun", "TopSpin 4", "The Beautiful Poetry of Donald Trump", "Top Gear");