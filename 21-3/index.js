const users = [{
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

const box = document.querySelector(".box");
const newel = document.createElement("ol");
newel.style.listStyleType = "none";
users.forEach((el) => {
    const newli = document.createElement("li");
    newli.setAttribute("data-id", el.id);
    newli.textContent = el.firstName + "" + el.lastName;
    box.append(newel);
    newel.append(newli);
});