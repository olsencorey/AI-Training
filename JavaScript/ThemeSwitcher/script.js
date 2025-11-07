const themes = [
  { name: "hawaiian", message: "Aloha! Hawaiian theme activated." },
  { name: "obx", message: "OBX theme activated. Time to ride the waves!" }
];

const switchBtn = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const themeMsg = document.getElementById("theme-message");

switchBtn.addEventListener("click", function() {
  const isHidden = dropdown.hidden;
  if (isHidden) {
    // Show menu
    dropdown.hidden = false;
    switchBtn.setAttribute("aria-expanded", "true");
  } else {
    // Hide menu
    dropdown.hidden = true;
    switchBtn.setAttribute("aria-expanded", "false");
  }
});

// Add event listeners to each menu item
const menuItems = dropdown.querySelectorAll('[role="menuitem"]');

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const themeName = item.id.replace("theme-", "");

    // Remove existing theme classes
    document.body.className = Array.from(document.body.classList)
      .filter(c => !c.startsWith("theme-"))
      .join(" ");

    // Add the selected theme class
    document.body.classList.add(`theme-${themeName}`);

    // Find and set the message
    const theme = themes.find(t => t.name === themeName);
    themeMsg.textContent = "";
    if (theme) {
      themeMsg.textContent = theme.message;
    }

    // Close the dropdown
    dropdown.hidden = true;
    switchBtn.setAttribute("aria-expanded", "false");
  });
});
