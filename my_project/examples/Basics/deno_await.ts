try {
  const data = await Deno.readTextFile("example.txt");
  console.log(data);
} catch (err) {
  console.error(err);
}

Deno.create("./newFile.txt");
