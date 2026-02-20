
const socket = io('ws://localhost:5000');

const message = document.getElementById("message");
const activeUser = document.getElementById("activeUser");


// from
const sentMessage = document.getElementById("sentMessage");
const receiverId = document.getElementById("receiverId");
const from = document.getElementById("from");
socket.on("connect", async () => {


    socket.on("welcome", (data) => {
        console.log(data);
        message.textContent = data?.message + " " + data?.id;


    })


    // get all active user use on because server send this event
    socket.on("activeUser", (data) => {
        activeUser.innerHTML = ""; // clear old list

        const userArr = Object.entries(data);
        let active = 0;


        userArr.forEach(([id, name]) => {
            active++;

            const span = document.createElement("span");
            span.textContent = active + " -  " + name;

            const br = document.createElement("br");

            activeUser.appendChild(span);
            activeUser.appendChild(br);
        });


        // send and receive message
        // 

        from.addEventListener("submit", (event) => {
            console.log("from event clicked")


            event.preventDefault();

            const id = receiverId.value;
            const msg = sentMessage.value;

            const payload = {
                receiverId: id,
                message: msg

            }

            // send to socket
            socket.emit("chat", payload);




        }
        )
        // receive data
        socket.on("newChat", (data) => {
            console.log(data, 'data from server');

        })







    });










})



