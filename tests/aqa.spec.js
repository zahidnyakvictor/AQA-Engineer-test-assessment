import { test, expect } from "@playwright/test";

test("Search ", async ({ page }) => {
  await page.goto("https://vite-react-alpha-lemon.vercel.app/");
  await page.locator('[id=":r0:"]').fill("Rainy Mood");
  await page.waitForSelector('input.MuiInputBase-input.MuiOutlinedInput-input.css-1pk1fka');
  const resultText = await page.locator('input.MuiInputBase-input.MuiOutlinedInput-input.css-1pk1fka').inputValue();
  expect(resultText).toContain("rainy mood");
  
});
test("plus", async ({ page }) => {
  await page.goto("https://vite-react-alpha-lemon.vercel.app/");
  await page.locator("button").nth(3).first().click();
  await page.waitForSelector('[id="playlist"]');
  const playlistItems = await page.locator('[id="playlist"]').innerText();
  expect(playlistItems).toContain("Spring Dance");
});

test("addboxes", async ({ page }) => {
  await page.goto("https://vite-react-alpha-lemon.vercel.app/");
  const checkboxes = page.locator("input.PrivateSwitchBase-input.css-j8yymo");
  await checkboxes.nth(0).check();
  await checkboxes.nth(1).check();
  const addSelectedButton = page.locator('button:has-text("ADD 2 TRACKS")');
  await addSelectedButton.click();
  const playlistTracks = page.locator(
    "#playlist .MuiGrid-container.css-adtkzx",
  );
  await expect(playlistTracks).toHaveCount(2);
});
