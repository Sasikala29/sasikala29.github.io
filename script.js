// ===============================
// Portfolio JavaScript
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Add current year automatically
    const yearElement = document.querySelector("footer p");

    if (yearElement) {
        yearElement.textContent =
            `© ${new Date().getFullYear()} Sasikala Manikandan`;
    }


    // Smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});
