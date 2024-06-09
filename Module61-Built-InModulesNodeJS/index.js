// created nodejs_architechture.txt and indexjs

const fs = require("fs");

{
  //Q.3
  // first adding data on  nodejs_architechture.txt
  const data =
    "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.";

  fs.writeFileSync("nodejs_architechture.txt", data);
}

{
  //Q.4
  // Adding with append data on nodejs_architechture.txt
  const newData =
    "Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.";

  fs.appendFileSync("nodejs_architechture.txt", newData);

  const data = fs.readFileSync("nodejs_architechture.txt");

  console.log(data.toString());
}

// { Q.5
//     fs.unlink('./nodejs_architechture.txt', ()=>{
//         console.log("Data Deleted Successfully");
//     })
// }

{
  //Q.6

  const os = require("os");

  console.log("Operating system name: " + os.type());

  console.log("OS release : " + os.release());
}

{
  //Q.7
  const http = require("http");

  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.write(
        "<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>"
      );
    }
    res.end();
  });

  server.listen(5000);
  console.log(`The HTTP Server is running on port 5000`);
}

{
  // Q.8
  const EventEmitter = require("events");

  const eventEmitter = new EventEmitter();

  const suscribeMessage = (channelName) => {
    console.log(`Thanks for Suscribing to ${channelName}`);
  };

  eventEmitter.addListener("Suscribe", suscribeMessage);
  eventEmitter.emit("Suscribe", "College Wallah");

  // The Above Statement must print "Thanks for Suscribing to College Wallah"
}

{
  //Q.9
  const EventEmitter = require("events");

  const eventEmitter = new EventEmitter();

  const subscribeMessage = (channelName) => {
    console.log(`Thanks For Subscribing to ${channelName}`);
  };

  eventEmitter.addListener("subscribe", subscribeMessage);

  console.log("Calling event listner before removing the event.");
  eventEmitter.emit("subscribe", "College Wallah");

  console.log("Calling event listner after removing the event.");
  eventEmitter.removeListener("subscribe", subscribeMessage);

  eventEmitter.emit("subscribe", "College Wallah");
}

{
  //Q.10
  const EventEmitter = require("events");

  const eventEmitter = new EventEmitter();

  const subscribeMessage = (channelName) => {
    console.log(`Thanks For Subscribing to ${channelName}`);
  };

  eventEmitter.addListener("subscribe", subscribeMessage);

  eventEmitter.emit("subscribe", "College Wallah");

  console.log(
    `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
  );

  eventEmitter.setMaxListeners(5);

  console.log(
    `The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
  );
}
