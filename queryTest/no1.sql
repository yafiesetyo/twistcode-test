CREATE TABLE TW_TRANSACTION (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY ,
    order_date DATETIME,
    status INT,
    payment_date DATETIME
);

INSERT INTO TW_TRANSACTION VALUES (1,'2020-04-01 12:30:11',0,'2020-04-02 12:30:11')
INSERT INTO TW_TRANSACTION VALUES (2,'2020-05-01 12:30:11',2,'2020-05-02 12:30:11')
INSERT INTO TW_TRANSACTION VALUES (3,'2020-06-01 12:30:11',1,'2020-06-02 12:30:11')
