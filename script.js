const accordionContent = document.querySelector(".accordion__content");

const accordionData = [
    {
        title: "Title 1",
        description: "description 1",
    },
    {
        title: "Title 2",
        description: "description 2",
    },
    {
        title: "Title 3",
        description: "description 3",
    },
];

accordionData.forEach((data) => {
    accordionContent.innerHTML += `
    <details>
        <summary>
            ${data.title}
            <span><span/>
        </summary>
       <p> ${data.description}</p>
    </details>
    `;
});

const details = document.querySelectorAll("details");

details.forEach((detail) => {
    detail.addEventListener("click", (e) => {
        const span = e.target.querySelector("span");
        span.classList.toggle("active");
    });
});
