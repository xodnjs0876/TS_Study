export async function uploadFile(file: File[]) {
  const formData = new FormData();

  for (const files of file) {
    formData.append("files", files);
  }

  const response = await fetch(`${process.env.REACT_APP_API_KEY}files/upload`, {
    method: "POST",
    body: formData,
  });

  if (response.ok !== true) {
    alert("실패");
    throw Object.assign(new Error(), { code: 100 });
  }

  const data = response.json();
  return data;
}
