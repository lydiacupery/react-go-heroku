-- +goose Up
-- SQL in this section is executed when the migration is applied.
CREATE TABLE ping_timestamp (
        id serial,
        occurred timestamptz NOT NULL
);

-- +goose Down
-- SQL in this section is executed when the migration is rolled back.
DROP TABLE ping_timestamp;

