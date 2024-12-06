import {
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const authors = pgTable("authors", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  image: text("image"),
});

export const startups = pgTable("startups", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  authorId: integer("author_id")
    .references(() => authors.id)
    .notNull(),
  views: integer("views").default(0),
  description: text("description"),
  category: varchar("category", { length: 20 }).notNull(),
  image: text("image").notNull(),
  pitch: text("pitch"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
