.PHONY: refresh_db, build_static

refresh_db:
	psql -h 127.0.0.1 -U postgres -d template1 -f server/sql_scripts/drop.sql && \
	psql -h 127.0.0.1 -U postgres -d template1 -f server/sql_scripts/init.sql && \
	cd server && knex migrate:latest && \
	knex seed:run

build_static:
	cd client && gulp build && \
	cd ../partners && gulp build


