drop database if exists airbnb_nyc_normalized;
create database airbnb_nyc_normalized;
use airbnb_nyc_normalized;

create table neighborhood_group (
	neighborhood_group_id int primary key auto_increment,
    `name` varchar(50) not null unique
);

create table neighborhood (
	neighborhood_id int primary key auto_increment,
    `name`varchar(50) not null,
    neighborhood_group_id int not null,
    constraint fk_neighborhood_neighborhood_group_id
		foreign key (neighborhood_group_id)
		references neighborhood_group(neighborhood_group_id),
	constraint uq_name_neighborhood_group_id
		unique(`name`, neighborhood_group_id)
);

create table `host` (
	host_id int primary key auto_increment,
    `name` varchar(50) not null
);

create table room_type (
	room_type_id int primary key auto_increment,
    `name` varchar(50) not null
);

create table listing (
	listing_id int primary key auto_increment,
    `name` varchar(256) not null,
    host_id int not null,
    neighborhood_id int not null,
    latitude decimal(8,5) not null,
    longitude decimal(8,5) not null,
    room_type_id int not null,  
    price decimal(8,2) not null,
    minimum_nights int not null,
    number_of_reviews int not null,
    last_review date null,
    reviews_per_month int null,
    calculated_host_listings_count int not null,
    availability_365 int not null,
    constraint fk_listing_host_id
		foreign key (host_id)
        references `host`(host_id),
	 constraint fk_listing_neighborhood_id
		foreign key (neighborhood_id)
        references neighborhood(neighborhood_id),
	 constraint fk_listing_room_type_id
		foreign key (room_type_id)
        references room_type(room_type_id)
);