CREATE TABLE User
(
        UserID          int  NOT NULL,
        UserName        varchar(20) NOT NULL,
        Password        varchar(20) NOT NULL,

PRIMARY KEY (UserID)
);

CREATE TABLE Messages
(
        MessageID       int NOT NULL,
        UserID          int NOT NULL,
        Message         varchar(9001),
        TimeStamp       TIMESTAMP NOT NULL,

PRIMARY KEY (MessageID),
FOREIGN KEY (UserID) REFERENCES User (UserID)
);
