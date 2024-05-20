//Mock Auth
export async function authApi() {
  const url = 'https://postman-echo.com/basic-auth';
  const options = {
    headers: {
      Authorization: 'Basic cG9zdG1hbjpwYXNzd29yZA==',
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.authenticated;
  } catch (error) {
    console.error(error);
  }
}
