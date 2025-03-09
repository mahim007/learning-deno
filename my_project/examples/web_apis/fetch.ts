import * as streams from "@std/streams";
console.time("my-timer");
const response = await fetch("https://snowtooth-hotel-api.fly.dev");

console.timeLog("my-timer");
// const data = await response.json();
// console.table(data, ["name", "capacity"]);

// data.map((item, index) => {
//     console.log(`data at ${index} is :`, item);
// })

if (response.body) {
  console.log("response body: ", response.body);
  const transformedBody = response.body
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new streams.TextLineStream())
    .pipeThrough(streams.toTransformStream(async function* (src: any) {
      for await (const chunk of src) {
        if (chunk.trim().length === 0) {
          continue;
        }

        console.log("chunk: ", chunk);
        console.log();
        yield chunk;
        console.trace();
      }
    }));

  const reader = transformedBody.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    console.log("value: ", value);
  }
}

console.timeEnd("my-timer")
