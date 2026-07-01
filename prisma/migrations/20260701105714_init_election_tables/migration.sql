-- CreateTable
CREATE TABLE "Party" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PollingUnit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sheetCode" TEXT NOT NULL,
    "isReady" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Party_acronym_key" ON "Party"("acronym");

-- CreateIndex
CREATE UNIQUE INDEX "PollingUnit_sheetCode_key" ON "PollingUnit"("sheetCode");
