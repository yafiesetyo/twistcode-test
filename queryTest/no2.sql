create table tw_transaction_details( 
    id bigint, 
    transaction_id bigint unsigned, 
    price int, 
    qty int, 
    PRIMARY KEY (id), 
    CONSTRAINT fk_transactionDetails FOREIGN KEY (transaction_id) REFERENCES tw_transaction(id) on DELETE CASCADE 
)

insert into tw_transaction_details values (1,1,2000,10);
insert into tw_transaction_details values (2,2,45000,14);
insert into tw_transaction_details values (3,3,21000,15);