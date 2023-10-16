export async function downloadFile(id: string, filename: string) {
  fetch(`${process.env.REACT_APP_API_KEY}files/download/${id}`, {
    method: "GET",
  })
    .then((res) => {
      if (res.status !== 200) throw Object.assign(new Error(), { code: 100 });
      return res.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout((_: any) => {
        window.URL.revokeObjectURL(url);
      }, 1000);
      a.remove();
    })
    .catch((err) => {
      console.error("err: ", err);
      alert(err);
    });
}
