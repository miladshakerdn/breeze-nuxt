import { useUser, fetchCurrentUser } from "~/composables/useAuth";

export default defineNuxtPlugin(async () => {
  const user = useUser();
  // console.log('user');
  // console.log(user.value);
  // // Skip if already initialized on server
  // if (user.value !== undefined) return;
  // let userValue = await fetchCurrentUser();
  // if (userValue !== null) {
  //   console.log(userValue['data']);
  // }
});
