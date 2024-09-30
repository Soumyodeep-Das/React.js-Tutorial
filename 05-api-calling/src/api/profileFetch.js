export const profileFetch = async () => {
  const profile = await fetch("https://randomuser.me/api/", {
    method: 'GET'
  });
  return await profile.json();
};
