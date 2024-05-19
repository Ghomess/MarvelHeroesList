//Mock Auth
export async function authApi() {
  const response = await fetch('https://postman-echo.com/basic-auth', {
    headers: {
      Authorization: 'Basic cG9zdG1hbjpwYXNzd29yZA==',
    },
  });
  const data = await response.json();
  return data.authenticated;
}
