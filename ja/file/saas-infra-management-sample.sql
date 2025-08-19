CREATE DATABASE single_tenant;

use single_tenant;

CREATE TABLE user (
    id      integer,
    name    varchar(40),
    PRIMARY KEY(id)
)