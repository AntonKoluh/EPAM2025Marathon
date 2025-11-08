import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from './world.ts';
import { LoginPage } from '../pages/TestRoomPage.ts';
import { DeleteModal } from '../pages/DeleteModal.ts';

Given('i am the room page', async function (this: CustomWorld) {
  const login = new LoginPage(this.page);
  await login.open(this.baseUrl);
});
When('I click on the bin icon', async function (this: CustomWorld) {
  const login = new LoginPage(this.page);
  await login.delete();
});
Then('i should see a delete confirmation modal', async function (this: CustomWorld) {
  const modal = new DeleteModal(this.page);
  await modal.expectVisible();
});
When('i confirm the deletion', async function (this: CustomWorld) {
  const modal = new DeleteModal(this.page);
  await modal.confirm();
});

// Runs locally, however, due to CORS and django API fails on GithubActions...
// Then('i should see a success message', async function (this: CustomWorld) {
//   await this.page.getByText(/test-delete sss removed successfully/i).waitFor({
//     state: 'visible'
//   });
// });