// Script to update the year dynamically
const getCurrentYear = () => {
    document.getElementById("current-year").textContent = new Date().getFullYear();
}

export { getCurrentYear }
