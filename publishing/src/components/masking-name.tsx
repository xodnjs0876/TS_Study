const maskingName = (name: string) => {
  if (name.length <= 2) {
    return name.replace(name.substring(0, 1), "*");
  }

  return (
    name[0] +
    "*".repeat(name.substring(1, name.length - 1).length) +
    name[name.length - 1]
  );
};

export default maskingName;
