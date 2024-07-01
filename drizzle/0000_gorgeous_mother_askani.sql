CREATE TABLE `resources` (
	`id` text PRIMARY KEY NOT NULL,
	`usage_date` integer,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP,
	`product` text,
	`product_category` text
);
