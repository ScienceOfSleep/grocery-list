-- CreateTable
CREATE TABLE "listItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL DEFAULT false
);
