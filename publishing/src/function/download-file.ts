export async function downloadFile(
  url: string,
  filename: string,
  options?: RequestInit | null
) {
  fetch(url, options ? options : { method: "GET" })
    .then((res) => {
      if (res.status !== 200) throw "파일을 다운로드 할 수 없습니다.";
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
