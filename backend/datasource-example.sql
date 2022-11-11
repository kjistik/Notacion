USE notacion_docker;

--
-- Data dump
--
INSERT INTO
    `subjects`
VALUES
    (1, 1, 'Historia'),
    (2, 1, 'Matemática'),
    (3, 1, 'Física'),
    (4, 1, 'Ecología');

INSERT INTO
    `teachers`
VALUES
    (1000, 1, 'García', 'Gustavo', 3),
    (null, 1, 'Petrikov', 'Simon', 3),
    (null, 1, 'Hayek', 'Frederick', 1),
    (null, 1, 'Schuyler', 'Elizabeth', 1),
    (null, 1, 'Cediño', 'Julio', 2),
    (null, 1, 'Miranda', 'Manuel', 2),
    (null, 1, 'García', 'Tamara', 4);

INSERT INTO
    `students`
values
    (1000, 1, 'Coronel', 'Martín'),
    (null, 1, 'Nigma', 'Edward'),
    (null, 1, 'Wayne', 'Bruce'),
    (null, 1, 'Napier', 'Jack'),
    (null, 1, 'Díaz', 'Bruno'),
    (null, 1, 'Puppington', 'Clay');

INSERT INTO
    `grades`
VALUES
    (1, 9, 1000, 1003);

INSERT INTO
    `grades`
VALUES
    (2, 7, 1000, 1000);

INSERT INTO
    `grades`
VALUES
    (3, 8, 1000, 1005);

INSERT INTO
    `grades`
VALUES
    (4, 8, 1000, 1006);

INSERT INTO
    `grades`
VALUES
    (5, 8, 1001, 1002);

INSERT INTO
    `grades`
VALUES
    (6, 4, 1001, 1004);

INSERT INTO
    `grades`
VALUES
    (7, 10, 1001, 1001);

INSERT INTO
    `grades`
VALUES
    (8, 5, 1001, 1006);

INSERT INTO
    `grades`
VALUES
    (9, 4, 1002, 1003);

INSERT INTO
    `grades`
VALUES
    (10, 7, 1002, 1005);

INSERT INTO
    `grades`
VALUES
    (11, 10, 1002, 1000);

INSERT INTO
    `grades`
VALUES
    (12, 3, 1002, 1006);

INSERT INTO
    `grades`
VALUES
    (13, 9, 1003, 1002);

INSERT INTO
    `grades`
VALUES
    (14, 6, 1003, 1004);

INSERT INTO
    `grades`
VALUES
    (15, 1, 1003, 1001);

INSERT INTO
    `grades`
VALUES
    (16, 1, 1003, 1006);

INSERT INTO
    `grades`
VALUES
    (17, 4, 1004, 1003);

INSERT INTO
    `grades`
VALUES
    (18, 9, 1004, 1004);

INSERT INTO
    `grades`
VALUES
    (19, 6, 1004, 1001);

INSERT INTO
    `grades`
VALUES
    (20, 4, 1004, 1006);

INSERT INTO
    `grades`
VALUES
    (21, 10, 1005, 1003);

INSERT INTO
    `grades`
VALUES
    (22, 2, 1005, 1004);

INSERT INTO
    `grades`
VALUES
    (23, 7, 1005, 1001);

INSERT INTO
    `grades`
VALUES
    (24, 3, 1005, 1006);

COMMIT;
