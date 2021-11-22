const backUrl = "https://react-test-sejo6.ondigitalocean.app";

export async function loginUser(email, password) {
  const resp = await fetch(`${backUrl}/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYi5jb20iLCJpYXQiOjE2MzY5Njk5NjEsImV4cCI6MTYzNjk3MzU2MX0.Gv2_RAdnOymFlDqgJOwNReTjsrqKIZZBTnknij5_8Bs'
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await resp.json();
  // console.log(data);
  return data;
}
export async function addSkill({ title, description }) {
  const resp = await fetch(`${backUrl}/v1/content/skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      title,
      description,
    }),
  });

  const data = await resp.json();
  // console.log(data);
  return data;
}

export async function registerUser(email, password) {
  const resp = await fetch(`${backUrl}/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await resp.json();
  // console.log(data);
  return data;
}

export function getToken() {
  const token = localStorage.getItem("skillUserToken");
  return token || null;
}
