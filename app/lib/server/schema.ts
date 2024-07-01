import { InferSelectModel, sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const resources = sqliteTable("resources", {
  id: text("id").primaryKey(),
  usageDate: integer("usage_date", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(CURRENT_TIMESTAMP)`,
  ),
  product: text("product"),
  productCategory: text("product_category"),
});

export type SelectResources = InferSelectModel<typeof resources>;
